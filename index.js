const questions = [
  {
    type: "mcq",
    question: "Which of the following is an example of innovation?",
    options: [
      "Using a pen to write",
      "Using a pen as a stylus for a touchscreen",
      "Using a pen as a bookmark",
      "All of the above",
    ],
    answer: "b", // Using 'a', 'b', 'c', 'd' for consistency with options
    explanation:
      "Innovation involves using something in a new or improved way.",
  },
  {
    type: "mcq",
    question:
      "Which device is commonly used to input drawings into a computer?",
    options: ["Printer", "Scanner", "Graphics Tablet", "Monitor"],
    answer: "c",
  },
  {
    type: "mcq",
    question: "What does “thinking outside the box” mean?",
    options: [
      "Following instructions",
      "Solving problems in creative ways",
      "Ignoring the problem",
      "Copying others",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is NOT a basic step in problem-solving?",
    options: [
      "Identifying the problem",
      "Ignoring the problem",
      "Generating solutions",
      "Implementing a solution",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of the following is an example of computational thinking?",
    options: [
      "Memorizing facts",
      "Breaking a problem into smaller parts",
      "Guessing answers",
      "Copying code",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which technology is used to create digital art?",
    options: ["Paintbrush", "Photoshop", "Hammer", "Screwdriver"],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is a famous example of design thinking?",
    options: [
      "The invention of the light bulb",
      "The creation of the wheel",
      "The design of the iPhone",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of the following is NOT a creative field?",
    options: ["Music", "Painting", "Data Entry", "Architecture"],
    answer: "c",
  },
  {
    type: "mcq",
    question: "Which principle is important in user interface design?",
    options: ["Complexity", "Clarity", "Confusion", "Randomness"],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is an example of lateral thinking?",
    options: [
      "Solving a math problem step by step",
      "Finding a shortcut nobody thought of",
      "Memorizing a formula",
      "Following a recipe exactly",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is a famous innovation in transportation?",
    options: ["Bicycle", "Steam engine", "Electric car", "All of the above"],
    answer: "d",
  },
  {
    type: "mcq",
    question:
      "Which of the following is a benefit of teamwork in creative projects?",
    options: [
      "More ideas",
      "Faster work",
      "Shared responsibility",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "What is the main purpose of a prototype?",
    options: [
      "To sell the product",
      "To test ideas quickly",
      "To finish the project",
      "To advertise",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is NOT a step in the design process?",
    options: ["Empathize", "Define", "Ignore", "Prototype"],
    answer: "c",
  },
  {
    type: "mcq",
    question:
      "Which of the following is an example of using technology creatively?",
    options: [
      "Making a robot that draws pictures",
      "Writing a poem",
      "Singing a song",
      "Reading a book",
    ],
    answer: "a",
  },
  {
    type: "mcq",
    question: "Which of these is a famous example of creative problem-solving?",
    options: [
      "The Wright brothers inventing the airplane",
      "Copying someone’s homework",
      "Memorizing a textbook",
      "Ignoring a problem",
    ],
    answer: "a",
  },
  {
    type: "mcq",
    question: "Which of these is a good way to generate ideas?",
    options: ["Brainstorming", "Sleeping", "Complaining", "Waiting"],
    answer: "a",
  },
  {
    type: "mcq",
    question: "Which of these is a key feature of a good logo?",
    options: ["Simplicity", "Complexity", "Confusion", "Randomness"],
    answer: "a",
  },
  {
    type: "mcq",
    question:
      "Which of the following is an example of a creative use of a smartphone?",
    options: [
      "Making phone calls",
      "Using it as a flashlight",
      "Using it as a paperweight",
      "None of the above",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is NOT a benefit of creative thinking?",
    options: [
      "More solutions",
      "Better teamwork",
      "Increased boredom",
      "Personal growth",
    ],
    answer: "c",
  },
  {
    type: "mcq",
    question: "Which of these is a famous creative company?",
    options: ["Apple", "Microsoft", "Google", "All of the above"],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to learn a new language?",
    options: [
      "Watching movies",
      "Reading textbooks only",
      "Memorizing word lists",
      "Ignoring practice",
    ],
    answer: "a",
  },
  {
    type: "mcq",
    question: "Which of these is an example of design in daily life?",
    options: [
      "The shape of a chair",
      "The color of a wall",
      "The layout of a website",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative use of waste materials?",
    options: [
      "Throwing them away",
      "Recycling into art",
      "Burning them",
      "Ignoring them",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is a key aspect of innovation?",
    options: ["Imitation", "Improvement", "Stagnation", "Repetition"],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to solve a traffic problem?",
    options: [
      "Building more roads",
      "Promoting carpooling",
      "Ignoring the problem",
      "Increasing traffic lights",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is a creative use of a computer?",
    options: [
      "Playing games",
      "Making digital music",
      "Watching videos",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is NOT a creative field?",
    options: ["Engineering", "Medicine", "Accounting", "All can be creative"],
    answer: "d",
    explanation: "Creativity can be applied in any field!",
  },
  {
    type: "mcq",
    question: "Which of these is a famous example of creative architecture?",
    options: [
      "The Eiffel Tower",
      "The Taj Mahal",
      "The Sydney Opera House",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to save water?",
    options: [
      "Fixing leaks",
      "Using water for gardening",
      "Leaving taps open",
      "Ignoring wastage",
    ],
    answer: "a",
  },
  {
    type: "mcq",
    question: "Which of these is a creative use of social media?",
    options: [
      "Sharing memes",
      "Promoting social causes",
      "Spreading rumors",
      "Ignoring messages",
    ],
    answer: "b",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to present data?",
    options: ["Pie chart", "Bar graph", "Infographic", "All of the above"],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a camera?",
    options: [
      "Taking selfies",
      "Making stop-motion animation",
      "Recording lectures",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a 3D printer?",
    options: [
      "Printing toys",
      "Printing medical implants",
      "Printing food",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use AI?",
    options: [
      "Generating art",
      "Writing stories",
      "Composing music",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a drone?",
    options: [
      "Aerial photography",
      "Delivering packages",
      "Planting trees",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a website?",
    options: ["Blogging", "Online portfolio", "E-commerce", "All of the above"],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a smartphone app?",
    options: [
      "Learning languages",
      "Tracking fitness",
      "Managing finances",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a robot?",
    options: [
      "Cleaning",
      "Teaching",
      "Assisting the elderly",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use virtual reality?",
    options: ["Gaming", "Education", "Therapy", "All of the above"],
    answer: "d",
  },
  {
    type: "fill",
    question:
      "The process of generating many ideas without judging them is called __________.",
    answer: "Brainstorming",
  },
  {
    type: "fill",
    question:
      "The ability to see connections between unrelated things is called __________ thinking.",
    answer: "Lateral",
  },
  {
    type: "fill",
    question: "The first working model of a product is called a __________.",
    answer: "Prototype",
  },
  {
    type: "fill",
    question:
      "The process of breaking a problem into smaller parts is called __________.",
    answer: "Decomposition",
  },
  {
    type: "fill",
    question:
      "The principle of making things easy to use is called __________.",
    answer: "Usability",
  },
  {
    type: "fill",
    question: "The use of computers to create art is called __________ art.",
    answer: "Digital",
  },
  {
    type: "fill",
    question:
      "The process of improving an existing product is called __________.",
    answer: "Innovation",
  },
  {
    type: "fill",
    question: "The process of finding patterns in data is called __________.",
    answer: "Analysis",
  },
  {
    type: "fill",
    question: "The process of testing ideas quickly is called __________.",
    answer: "Prototyping",
  },
  {
    type: "fill",
    question: "The process of making something new is called __________.",
    answer: "Creation", // Or "Innovation"
  },
  {
    type: "fill",
    question:
      "The process of using technology to solve problems is called __________.",
    answer: "Engineering",
  },
  {
    type: "fill",
    question:
      "The process of making things look attractive is called __________.",
    answer: "Design",
  },
  {
    type: "fill",
    question:
      "The process of working together to achieve a goal is called __________.",
    answer: "Collaboration", // Or "Teamwork"
  },
  {
    type: "fill",
    question:
      "The process of using imagination to create something is called __________.",
    answer: "Creativity",
  },
  {
    type: "fill",
    question:
      "The process of using computers to solve problems is called __________.",
    answer: "Computing",
  },
  {
    type: "fill",
    question:
      "The process of making decisions based on data is called __________.",
    answer: "Data-driven decision making",
  },
  {
    type: "fill",
    question: "The process of making things work better is called __________.",
    answer: "Optimization",
  },
  {
    type: "fill",
    question:
      "The process of using technology in art is called __________ art.",
    answer: "Digital",
  },
  {
    type: "fill",
    question:
      "The process of making things easier to use is called __________.",
    answer: "Simplification", // Or "Usability"
  },
  {
    type: "fill",
    question: "The process of turning ideas into reality is called __________.",
    answer: "Implementation",
  },
  {
    type: "short",
    question:
      "You are given a box, a candle, and some matches. How would you fix the candle to the wall so that it doesn’t drip wax on the floor?",
    answer:
      "Use the box as a candle holder, fix the box to the wall, and put the candle inside.",
    is_open_ended: true, // Custom flag for open-ended questions
  },
  {
    type: "short",
    question:
      "Imagine you have to design a chair for a child. What features would you include to make it both fun and safe?",
    answer:
      "Bright colors, rounded edges, lightweight, stable base, maybe playful shapes.",
    is_open_ended: true,
  },
  {
    type: "short",
    question:
      "A city has a problem with littering in parks. Suggest a creative solution using technology.",
    answer:
      "Install smart bins that reward users, use sensors to alert cleaners, or create an app for reporting litter.",
    is_open_ended: true,
  },
  {
    type: "short",
    question:
      "You want to help people remember to drink water regularly. Suggest a creative use of technology for this.",
    answer:
      "A smart bottle that lights up or beeps, a reminder app, or a wearable device that tracks hydration.",
    is_open_ended: true,
  },
  {
    type: "short",
    question:
      "A friend wants to learn guitar but finds it difficult. Suggest a creative way to help them using technology.",
    answer:
      "Use a guitar learning app, watch YouTube tutorials, or use a smart guitar with light-up frets.",
    is_open_ended: true,
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a smartwatch?",
    options: [
      "Tracking sleep",
      "Monitoring heart rate",
      "Reminding to stand up",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a voice assistant?",
    options: [
      "Setting reminders",
      "Playing music",
      "Controlling smart home devices",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a spreadsheet?",
    options: [
      "Budgeting",
      "Planning events",
      "Tracking habits",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a projector?",
    options: [
      "Watching movies",
      "Creating art installations",
      "Teaching in classrooms",
      "All of the above",
    ],
    answer: "d",
  },
  {
    type: "mcq",
    question: "Which of these is a creative way to use a bicycle?",
    options: [
      "Exercise",
      "Delivery service",
      "Mobile library",
      "All of the above",
    ],
    answer: "d",
  },
];

let current = 0;
let userAnswers = new Array(questions.length).fill(null);

function renderQuestion(idx) {
  const q = questions[idx];
  let html = `<div class="question"><b>Q${idx + 1}:</b> ${
    q.question
  }</div><div class="options">`;

  if (q.type === "mcq") {
    q.options.forEach((opt, i) => {
      html += `<label>
        <input type="radio" name="option" value="${i}" ${
        userAnswers[idx] == i ? "checked" : ""
      }>
        ${opt}
      </label>`;
    });
  } else if (q.type === "fill") {
    html += `<input type="text" id="fillInput" value="${
      userAnswers[idx] || ""
    }">`;
  } else if (q.type === "short") {
    html += `<textarea id="shortInput" rows="3">${
      userAnswers[idx] || ""
    }</textarea>`;
  }

  html += "</div>";
  document.getElementById("quiz").innerHTML = html;

  // Navigation buttons
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled = idx === questions.length - 1;
  document.getElementById("submitBtn").style.display =
    idx === questions.length - 1 ? "inline-block" : "none";
}

function saveAnswer() {
  const q = questions[current];
  if (q.type === "mcq") {
    const selected = document.querySelector('input[name="option"]:checked');
    userAnswers[current] = selected ? parseInt(selected.value) : null;
  } else if (q.type === "fill") {
    userAnswers[current] = document.getElementById("fillInput").value.trim();
  } else if (q.type === "short") {
    userAnswers[current] = document.getElementById("shortInput").value.trim();
  }
}

function nextQuestion() {
  saveAnswer();
  if (current < questions.length - 1) {
    current++;
    renderQuestion(current);
  }
}

function prevQuestion() {
  saveAnswer();
  if (current > 0) {
    current--;
    renderQuestion(current);
  }
}
console.log(questions.length);

function submitQuiz() {
  saveAnswer();
  let score = 0;
  let totalAutoGradable = 0;
  let feedbackHtml = `<h2>Quiz Results</h2>`;

  questions.forEach((q, i) => {
    let questionResult = `<div class="question-review"><h3>Q${i + 1}: ${
      q.question
    }</h3>`;

    if (q.type === "mcq") {
      totalAutoGradable++;
      // Accept both index and letter as answer
      let correctIndex =
        typeof q.answer === "number"
          ? q.answer
          : typeof q.answer === "string" && q.answer.match(/^[a-d]$/i)
          ? q.answer.toLowerCase().charCodeAt(0) - 97
          : null;
      let userIndex = userAnswers[i];
      if (typeof userIndex === "string" && userIndex.match(/^[a-d]$/i)) {
        userIndex = userIndex.toLowerCase().charCodeAt(0) - 97;
      }
      if (userIndex !== null && userIndex == correctIndex) {
        score++;
        questionResult += `<p style="color: green;">&#10004; Correct!</p>`;
      } else {
        questionResult += `<p style="color: red;">&#10006; Incorrect.</p>`;
      }
      questionResult += `<p>Your Answer: <strong>${
        q.options[userIndex] !== undefined
          ? q.options[userIndex]
          : "<em>No answer selected.</em>"
      }</strong></p>`;
      questionResult += `<p>Correct Answer: <strong>${q.options[correctIndex]}</strong></p>`;
      if (q.explanation) {
        questionResult += `<p class="explanation">Explanation: ${q.explanation}</p>`;
      }
    } else if (q.type === "fill") {
      totalAutoGradable++;
      const userAnswer = userAnswers[i];
      const isCorrect =
        userAnswer &&
        userAnswer.trim().toLowerCase() === q.answer.trim().toLowerCase();
      if (isCorrect) {
        score++;
        questionResult += `<p style="color: green;">&#10004; Correct!</p>`;
      } else {
        questionResult += `<p style="color: red;">&#10006; Incorrect.</p>`;
      }
      questionResult += `<p>Your Answer: <strong>${
        userAnswer || "<em>No answer provided.</em>"
      }</strong></p>`;
      questionResult += `<p>Correct Answer: <strong>${q.answer}</strong></p>`;
    } else if (q.type === "short") {
      questionResult += `<p>Your Answer:</p><p class="user-short-answer">${
        userAnswers[i] || "<em>No answer provided.</em>"
      }</p>`;
      questionResult += `<p><em>This question requires manual review.</em></p>`;
      if (q.answer) {
        questionResult += `<p>Expected/Suggested Answer: ${q.answer}</p>`;
      }
    }
    questionResult += `</div>`;
    feedbackHtml += questionResult;
  });

  feedbackHtml =
    `<h2>Your Auto-Graded Score: ${score} / ${questions.length}</h2>
  <p>Short answer and open-ended questions require manual evaluation. Great job completing the quiz!</p>` +
    feedbackHtml;

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("navigation").classList.add("hidden");
  const scorecard = document.getElementById("scorecard");
  scorecard.innerHTML = feedbackHtml;
  scorecard.classList.remove("hidden");
}

// Save answer on option change
document.addEventListener("change", function (e) {
  if (
    e.target.name === "option" ||
    e.target.id === "fillInput" ||
    e.target.id === "shortInput"
  ) {
    saveAnswer();
  }
});

// Initial render
window.onload = () => {
  renderQuestion(current);
};
