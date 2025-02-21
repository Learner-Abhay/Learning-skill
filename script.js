const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
let userMessage;
// const API_KEY = "USE YOUR API KEY FROM CHATGPT";

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">mode_comment</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatLi.querySelector("p");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content;
    })
    .catch(() => {
      messageElement.textContent = data.choices[0].message.content;
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTop = chatbox.scrollHeight;
  setTimeout(() => {
    const incomingChatLi = createChatLi(
      "Actually to make it work payment was required"
    );
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTop = chatbox.scrollHeight;
    generateResponse(incomingChatLi);
  }, 600);
};

chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
sendChatBtn.addEventListener("click", handleChat);
