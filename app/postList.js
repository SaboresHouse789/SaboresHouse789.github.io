import { getFirestore, collection, getDocs } from "firebase/firestore";

const firestore = getFirestore(); // Obtener una instancia de Firestore

// Función para generar un elemento <li> de publicación
const createPostElement = (post) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "list-group-item-action");

  const title = document.createElement("h5");
  title.textContent = post.title;

  const content = document.createElement("p");
  content.textContent = post.content;

  li.appendChild(title);
  li.appendChild(content);

  return li;
};

export const setupPosts = async () => {
  const postListElement = document.querySelector(".posts");

  try {
    const querySnapshot = await getDocs(collection(firestore, "posts"));

    if (querySnapshot.empty) {
      const messageElement = document.createElement("h4");
      messageElement.classList.add("text-white");
      messageElement.textContent = "No posts found";
      postListElement.appendChild(messageElement);
    } else {
      const postElements = [];
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        postElements.push(createPostElement(post));
      });

      postElements.forEach((postElement) => {
        postListElement.appendChild(postElement);
      });
    }
  } catch (error) {
    console.error("Error retrieving posts:", error);
    const messageElement = document.createElement("h4");
    messageElement.classList.add("text-white");
    messageElement.textContent = "Error retrieving posts";
    postListElement.appendChild(messageElement);
  }
};
