document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the selected location and job role
    var location = document.getElementById('location').value;
    var role = document.getElementById('role').value;

    // Call the function to fetch candidates with the selected criteria
    fetchCandidates(location, role);
  });

  function fetchCandidates(location, role) {

    // Sample candidates data
    var candidates = [
      {
        name: "John Doe",
        location: "New York",
        role: "Developer",
        image: "../assets/pic10.avif"
      },
      {
        name: "Jane Smith",
        location: "San Francisco",
        role: "Designer",
        image: "../assets/pic3.avif"
      },
      {
        name: "Mark Johnson",
        location: "London",
        role: "Project Manager",
        image: "../assets/pic4.avif"
      },
      {
        name: "Lisa Johnson",
        location: "London",
        role: "Data Analyst",
        image: "../assets/pic1.avif"
      },
      {
        name: "Jennie Louis",
        location: "Berlin",
        role: "Designer",
        image: "../assets/pic5.avif"
      }
      // Add more candidates here
    ];

    // Filter candidates based on location and role
    var filteredCandidates = candidates.filter(function(candidate) {
      if (location && role) {
        return candidate.location === location && candidate.role === role;
      } else if (location) {
        return candidate.location === location;
      } else if (role) {
        return candidate.role === role;
      } else {
        return true;
      }
    });

    // Display the filtered candidates
    displayCandidates(filteredCandidates);
  }

  function displayCandidates(candidates) {
    var candidatesList = document.getElementById('candidates-list');

    // Clear the candidates list
    candidatesList.innerHTML = '';

    // Display each candidate
    candidates.forEach(function(candidate) {
      var candidateElement = document.createElement('div');
      candidateElement.classList.add('candidate');

      // Candidate image
      var imageElement = document.createElement('img');
      imageElement.src = candidate.image;
      candidateElement.appendChild(imageElement);

      // Candidate details
      var detailsElement = document.createElement('div');
      detailsElement.classList.add('candidate-details');
      detailsElement.innerHTML = '<h3>' + candidate.name + '</h3>' +
                                 '<p><strong>Location:</strong> ' + candidate.location + '</p>' +
                                 '<p><strong>Role:</strong> ' + candidate.role + '</p>';
      candidateElement.appendChild(detailsElement);

      candidatesList.appendChild(candidateElement);
    });
  }