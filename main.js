const courses = [
    {
      title: "Beginner's Guide to Design",
      price: "$149.9",
      author: "Ronald Richards",
      rating: "★★★★★",
      totalHours: "22 Total Hours",
      lectures: "155 Lectures",
      level: "Beginner",
      image: "1404cd23c41a9abe4a27d97b90bf3e50.jpg"
    },
    {
      title: "Beginner's Guide to Design",
      price: "$149.9",
      author: "Ronald Richards",
      rating: "★★★★★",
      totalHours: "22 Total Hours",
      lectures: "155 Lectures",
      level: "Beginner",
      image: "1404cd23c41a9abe4a27d97b90bf3e50.jpg"
    },
    {
      title: "Beginner's Guide to Design",
      price: "$149.9",
      author: "Ronald Richards",
      rating: "★★★★★",
      totalHours: "22 Total Hours",
      lectures: "155 Lectures",
      level: "Beginner",
      image: "1404cd23c41a9abe4a27d97b90bf3e50.jpg"
    }
  ];

  const coursesContainer = document.getElementById("courses");

  function renderCourses() {
    coursesContainer.innerHTML = "";
    courses.forEach(course => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h4>${course.title}</h4>
        <p>By ${course.author}</p>
        <p>${course.rating} | ${course.totalHours} | ${course.lectures} | ${course.level}</p>
        <p><strong>${course.price}</strong></p>
      `;
      coursesContainer.appendChild(courseCard);
    });
  }

  function changePage(direction) {
    alert(`Switching to ${direction} page!`);
  }

  renderCourses();