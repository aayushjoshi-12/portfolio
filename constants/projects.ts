export const projects = [
  {
    title: "Surch AI",
    description: "Developed a web-based search summarizer using Google Custom Search API, Beautiful Soup, and Langchain for conversational retrieval. Implemented ChromaDB for vector storage and added a history feature with SQLite to track and revisit user queries.",
    link: "https://surch-12.streamlit.app",
    techStack: ["Python", "Langchain", "Streamlit", "Langchain-Huggingface", "SQLite", "ChromaDB", "Mistral-7B-v0.3"],
  },
  {
    title: "Finance LLM",
    description: "Developed Python scripts for automated data collection using Google Custom Search API and built an LLM dataset parser to generate a QA dataset. Fine-tuned an open-source Hugging Face model with the custom dataset to optimize performance. Utilized libraries like Beautiful Soup, PyPDF2, and Python-dotenv for auxiliary tasks.",
    link: "https://github.com/aayushjoshi-12/finance-llm",
    techStack: ["Python", "Transformers", "TRL", "Bitsandbytes", "Accelerate", "Google Colab"],
  },        
  {
    title: "Face Emotion Detection",
    description: "Integrated YOLO for face detection and fine-tuned ResNet18 for classifying seven emotions: Angry, Disgust, Fear, Happy, Neutral, Sad, and Surprise. Used pre-trained models for quick inference and easy setup on Linux systems.",
    link: "https://github.com/aayushjoshi-12/faces",
    techStack: ["Python", "PyTorch", "YOLO", "ResNet", "OpenCV", "Linux"],
  },
  {
    title: "Snake Game",
    description: "Snake Game with AI combines the classic Snake game with an AI agent trained using reinforcement learning. It features both manual and AI-controlled gameplay, customizable settings, score tracking, and real-time plotting of training progress. The AI uses a Q-network built with PyTorch to navigate the game.",
    link: "https://github.com/aayushjoshi-12/snake-game",
    techStack: ["Python", "PyTorch", "Pygame", "NumPy", "Matplotlib"],
  },
  {
    title: "Epsilon",
    description: "Epsilon is a 2D physics engine for reinforcement learning, simulating interactions with shapes like rectangles and circles. It features collision detection, response, and basic force application. Currently in development, it aims to improve collision handling and integrate more fully with RL, though issues with circle and rod collisions remain.",
    link: "https://github.com/aayushjoshi-12/epsilon",
    techStack: ["Python", "Pygame"],
  },
  {
    title: "Emailer",
    description: "Emailer Project automates sending emails to recruiters using the Gmail API. It requires setting up Gmail API credentials and a list of recruiter emails in an Excel file. Once configured, the project sends emails with an attached resume.",
    link: "https://github.com/aayushjoshi-12/emailer",
    techStack: ["Python", "Pandas", "Openpyxl", "Google-auth", "Gmail API"],
  },
  {
    title: "Loan Approval",
    description: "Performed basic preprocessing and EDA on a loan dataset.",
    link: "https://github.com/aayushjoshi-12/loan-approval",
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  }
];