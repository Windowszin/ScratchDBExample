
    async function fetchUserData() {
        const username = document.getElementById("username").value;
        const apiUrl = `https://scratchdb.lefty.one/v2/user/info/${username}`;
        
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Update the UI with fetched data
            document.getElementById("usernameResult").textContent = data.username;
            document.getElementById("idResult").textContent = data.id;
            document.getElementById("joinedResult").textContent = data.joined;
            document.getElementById("followersResult").textContent = data.followers;
            document.getElementById("followingResult").textContent = data.following;
            document.getElementById("countryResult").textContent = data.country;
            document.getElementById("bioResult").innerHTML = data.bio;
            document.getElementById("workResult").innerHTML = data.work;
            document.getElementById("statusResult").textContent = data.status;
            document.getElementById("schoolResult").textContent = data.school;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
