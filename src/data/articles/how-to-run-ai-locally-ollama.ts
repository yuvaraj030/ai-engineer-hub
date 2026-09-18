import type { Article } from '../../types';

const article: Article = {
  id: 'how-to-run-ai-locally-ollama',
  title: 'How to Run AI Locally on Your PC Using Ollama',
  slug: 'how-to-run-ai-locally-ollama',
  excerpt:
    'Learn how to run AI locally on your Windows PC using Ollama, download a model, send prompts, and understand the hardware needed for local AI.',
  category: 'local-ai',
  tags: ['Ollama', 'Local AI', 'AI', 'LLM', 'Windows', 'Beginners'],
  author: 'ai-engineer-hub',
  publishedDate: '2026-09-12',
  updatedDate: '2026-09-12',
  featuredImage: '',
  featuredImageAlt: 'AI model running on a local PC illustration',
  readingTime: 9,
  seoTitle: 'How to Run AI Locally on Your PC Using Ollama (2026)',
  metaDescription:
    'Learn how to run AI locally on your Windows PC using Ollama, download a model, send prompts, and understand the hardware needed for local AI.',
  featured: true,
  hasFaq: false,
  faqItems: [],
  content: [
    {
      type: 'p',
      text: 'Running AI locally means the AI model operates on your own computer instead of a remote server. No internet connection is required after setup. Your conversations stay private. This guide explains what local AI is, why it matters, and walks you through running your first local AI model on a Windows PC using Ollama.',
    },
    {
      type: 'h2',
      text: 'What Does "Running AI Locally" Mean?',
    },
    {
      type: 'p',
      text: 'When you use ChatGPT or similar tools, your prompts are sent over the internet to a company\'s server. That server runs the AI model and sends back a response. You are dependent on their service, their pricing, and their policies.',
    },
    {
      type: 'p',
      text: 'Running AI locally is different. The AI model lives on your own hard drive. When you send a prompt, your CPU or GPU processes it directly. Nothing is sent to the internet. The response comes from your machine.',
    },
    {
      type: 'h3',
      text: 'Benefits of Local AI',
    },
    {
      type: 'ul',
      children: [
        { type: 'li', text: 'Privacy — your data stays on your device.' },
        { type: 'li', text: 'No cost per query — you pay only for hardware and electricity.' },
        { type: 'li', text: 'Works offline — no internet required after setup.' },
        { type: 'li', text: 'No censorship or usage restrictions from a third-party service.' },
        { type: 'li', text: 'Customizable — you can choose from many different models.' },
      ],
    },
    {
      type: 'h3',
      text: 'Trade-offs',
    },
    {
      type: 'ul',
      children: [
        { type: 'li', text: 'Local models are generally smaller than cloud models and may produce different quality responses.' },
        { type: 'li', text: 'Requires more hardware resources than browsing a website.' },
        { type: 'li', text: 'Setup requires a few minutes compared to signing up for a website.' },
      ],
    },
    {
      type: 'h2',
      text: 'Hardware Requirements for Local AI',
    },
    {
      type: 'p',
      text: 'The hardware you need depends on which model you want to run. Here is a general overview:',
    },
    {
      type: 'table',
      headers: ['Hardware', 'Minimum', 'Recommended'],
      rows: [
        ['RAM', '8 GB', '16 GB or more'],
        ['Disk Space', '5 GB free', '20 GB or more for multiple models'],
        ['GPU (optional)', 'Any NVIDIA (4 GB VRAM)', 'NVIDIA with 8 GB+ VRAM'],
        ['CPU', 'Modern 4-core', 'Modern 8-core or better'],
        ['OS', 'Windows 10 64-bit', 'Windows 11 64-bit'],
      ],
    },
    {
      type: 'p',
      text: 'If you do not have a dedicated GPU, Ollama will use your CPU. Models will run but responses may take longer. Small models (under 4 billion parameters) are generally practical on CPU-only machines.',
    },
    {
      type: 'h2',
      text: 'What is Ollama and Why Use It?',
    },
    {
      type: 'p',
      text: 'Ollama is a free, open-source tool that simplifies downloading and running local AI models. Without Ollama, setting up a local model involves downloading model files, installing dependencies, and configuring software — a process that can take hours.',
    },
    {
      type: 'p',
      text: 'With Ollama, a single command downloads and runs a model. It also starts a local API server on port 11434, which means you can interact with the model from your browser, a terminal, or your own Python code.',
    },
    {
      type: 'h2',
      text: 'Step 1: Install Ollama',
    },
    {
      type: 'p',
      text: 'If you have not installed Ollama yet, follow our step-by-step installation guide first:',
    },
    {
      type: 'blockquote',
      text: 'See: How to Install Ollama on Windows — this guide covers the full installation process from downloading the installer to verifying the installation.',
    },
    {
      type: 'p',
      text: 'Once Ollama is installed, open PowerShell or Command Prompt and continue below.',
    },
    {
      type: 'h2',
      text: 'Step 2: Choose a Model',
    },
    {
      type: 'p',
      text: 'The Ollama model library at ollama.com/library lists all available models. For this guide, use Llama 3.2 3B — a small, capable model that works on most Windows PCs.',
    },
    {
      type: 'p',
      text: 'To download it, open a terminal and run:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: 'ollama pull llama3.2',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Terminal showing ollama pull llama3.2 downloading with a progress bar]',
      alt: 'PowerShell terminal with Ollama downloading llama3.2 and showing download progress',
      caption: 'Ollama downloads models with a simple pull command.',
    },
    {
      type: 'h2',
      text: 'Step 3: Run the Model',
    },
    {
      type: 'p',
      text: 'Once downloaded, start the model with:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: 'ollama run llama3.2',
    },
    {
      type: 'p',
      text: 'You will see a prompt appear. Type your message and press Enter. The model will reply.',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Ollama model running with a prompt and response visible in the terminal]',
      alt: 'Terminal showing Ollama running with a chat prompt and an example response',
      caption: 'Type your prompt and the model responds directly in the terminal.',
    },
    {
      type: 'h3',
      text: 'Example Prompts to Try',
    },
    {
      type: 'ul',
      children: [
        { type: 'li', text: 'Explain what machine learning is in simple terms.' },
        { type: 'li', text: 'Write a Python function that reverses a string.' },
        { type: 'li', text: 'What are three beginner-friendly Python projects?' },
        { type: 'li', text: 'Summarize the concept of neural networks.' },
      ],
    },
    {
      type: 'h2',
      text: 'Step 4: Use the Ollama API',
    },
    {
      type: 'p',
      text: 'When Ollama is running, it starts a local API server at http://localhost:11434. This lets you send prompts programmatically — useful for building applications.',
    },
    {
      type: 'p',
      text: 'You can test the API directly from your terminal using curl:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: `curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "What is local AI?",
  "stream": false
}'`,
    },
    {
      type: 'p',
      text: 'The API returns a JSON response containing the model\'s output. This is how Python applications, web apps, and other tools can interact with your local model.',
    },
    {
      type: 'h2',
      text: 'Step 5: Use Ollama with Python',
    },
    {
      type: 'p',
      text: 'If you have Python installed, you can interact with Ollama using the official Python library. Install it with:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: 'pip install ollama',
    },
    {
      type: 'p',
      text: 'Then run a simple script:',
    },
    {
      type: 'pre',
      lang: 'python',
      text: `import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'What is local AI in one sentence?'
        }
    ]
)

print(response['message']['content'])`,
    },
    {
      type: 'p',
      text: 'This script sends a message to your local model and prints the response. No API key required. No internet connection required.',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Python script output showing the model response in a terminal]',
      alt: 'Terminal showing the output of a Python script that queries a local Ollama model',
      caption: 'A Python script can talk to your local model in a few lines of code.',
    },
    {
      type: 'h2',
      text: 'Managing Your Models',
    },
    {
      type: 'p',
      text: 'As you explore Ollama, you may download several models. Here are the commands to manage them:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: `# See all downloaded models
ollama list

# Remove a model
ollama rm llama3.2

# Pull a specific version
ollama pull mistral:7b`,
    },
    {
      type: 'h2',
      text: 'Understanding Model Sizes',
    },
    {
      type: 'p',
      text: 'AI models are measured in parameters — the numerical values the model uses to process and generate text. More parameters generally means better quality but more resource usage.',
    },
    {
      type: 'table',
      headers: ['Parameter Count', 'Typical Size on Disk', 'Hardware Requirement'],
      rows: [
        ['1–3 billion (1B–3B)', '0.5–2 GB', 'Works on most modern PCs'],
        ['7–9 billion (7B–9B)', '4–6 GB', 'Needs 8+ GB RAM'],
        ['13 billion (13B)', '7–9 GB', 'Needs 16 GB RAM or NVIDIA GPU'],
        ['32+ billion (32B+)', '18+ GB', 'Needs high-end GPU or workstation'],
      ],
    },
    {
      type: 'h2',
      text: 'Next Steps',
    },
    {
      type: 'p',
      text: 'You have now run AI locally on your PC using Ollama. Here are some directions to explore next:',
    },
    {
      type: 'ul',
      children: [
        { type: 'li', text: 'Try different models from the Ollama library to find one that suits your use case.' },
        { type: 'li', text: 'Install Open WebUI for a browser-based chat interface instead of the terminal.' },
        { type: 'li', text: 'Learn Python to build your own AI tools that use the Ollama API.' },
        { type: 'li', text: 'Read about building a local AI assistant with Python and Ollama.' },
      ],
    },
  ],
};

export default article;
