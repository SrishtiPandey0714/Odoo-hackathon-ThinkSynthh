// ✅ STEP 1: Replace with your actual token
const token = localStorage.getItem('token'); // or hardcode for now

const form = document.getElementById('profileForm');

// ✅ STEP 2: Load current user profile
window.addEventListener('load', async () => {
  const res = await fetch('http://localhost:5000/api/user/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();

  // Fill form
  form.name.value = data.name || '';
  form.location.value = data.location || '';
  form.skillsOffered.value = data.skillsOffered || '';
  form.skillsWanted.value = data.skillsWanted || '';
  form.availability.value = data.availability || '';
  form.profileVisibility.value = data.profileVisibility || 'Public';
});

// ✅ STEP 3: Update user profile
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const res = await fetch('http://localhost:5000/api/user/update', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  });

  if (res.ok) {
    alert("Profile updated successfully!");
  } else {
    alert("Error updating profile.");
  }
});
