    // firebase config
      const firebaseConfig = {
        apiKey: "AIzaSyDALQzmEymTCsfa-JdJLBx5NjBkNyorGh8",
        authDomain: "easy-math-education.firebaseapp.com",
        projectId: "easy-math-education",
        storageBucket: "easy-math-education.appspot.com",
        messagingSenderId: "1008284631099",
        appId: "1:1008284631099:web:c0ee138cef80a90c915c1e",
        measurementId: "G-D7LR8M1ZBY"
      };
  
      firebase.initializeApp(firebaseConfig);
      // Get a reference to the Firestore database
      const db = firebase.firestore();
  
  
      // Handle form submission
      const form = document.getElementById('registrationFormData');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
  
        // Get form values
        const studentName = document.getElementById('student_name').value;
        const fatherName = document.getElementById('father_name').value;
        const motherName = document.getElementById('mother_name').value;
        const dob = document.getElementById('date_of_birth').value;
        const gender = document.getElementById('gender').value;
  
        const studentMobile = document.getElementById('student_mobile').value;
        const fatherMobile = document.getElementById('father_mobile').value;
        const bloodGroup = document.getElementById('blood_group').value;
        const category = document.getElementById('category').value;
        const permanentAdd = document.getElementById('permanent_add').value;
        const currentAdd = document.getElementById('current_add').value;
        const areaPincode = document.getElementById('area_pincode').value;
        const aadhaar = document.getElementById('aadhaar').value;
  
        const qualification = document.getElementById('qualification').value;
        const qualificationType = document.getElementById('qualification_type').value;
        const semesterYear = document.getElementById('semester_year').value;
        const appliedCourse = document.getElementById('course').value;
        const medium = document.getElementById('medium').value;
  
  
        // Create a new document with the form data in Firestore
        db.collection('registrationForm').doc(studentName).set({
  
            // db value -- variable value 
            studentName: studentName,
            fatherName: fatherName,
            motherName: motherName,
            dob: dob,
            gender: gender,
            studentMobile: studentMobile,
            fatherMobile: fatherMobile,
            bloodGroup: bloodGroup,
            category: category,
            permanentAdd: permanentAdd,
            currentAdd: currentAdd,
            areaPincode: areaPincode,
            aadhaar: aadhaar,
            qualification: qualification,
            qualificationType: qualificationType,
            semesterYear: semesterYear,
            appliedCourse: appliedCourse,
            medium: medium,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            alert('Your form registered successfully');
            // Clear the form fields after successful upload
            form.reset();
          })
          .catch((error) => {
            console.error('Error uploading form data:', error);
            alert('An error occurred while registering your Form');
          });
      });