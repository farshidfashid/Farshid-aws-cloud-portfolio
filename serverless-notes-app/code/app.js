const API_URL = "https://2md49kx4t7.execute-api.us-east-1.amazonaws.com/prod/notes";

// Fetch all notes
async function fetchNotes() {
    try {
        const response = await fetch(API_URL);
        const notes = await response.json();

        const list = document.getElementById("notesList");
        list.innerHTML = "";

        if (!Array.isArray(notes)) {
            console.error("Unexpected response:", notes);
            return;
        }

        notes.forEach(note => {
            const li = document.createElement("li");

            li.innerHTML = `
                <span>${note.content}</span>
                <button class="delete-btn" onclick="deleteNote('${note.noteId}')">X</button>
            `;

            list.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching notes:", error);
    }
}

// Create a new note
async function createNote() {
    const input = document.getElementById("noteContent");
    const content = input.value.trim();

    if (!content) return;

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content })
        });

        input.value = "";
        fetchNotes();

    } catch (error) {
        console.error("Error creating note:", error);
    }
}

// Delete note
async function deleteNote(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        fetchNotes();

    } catch (error) {
        console.error("Error deleting note:", error);
    }
}

// Load notes on page load
window.onload = fetchNotes;