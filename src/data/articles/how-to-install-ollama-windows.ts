import type { Article } from '../../types';

const article: Article = {
  id: 'how-to-install-ollama-windows',
  title: 'How to Install Ollama on Windows: Beginner Guide',
  slug: 'how-to-install-ollama-windows',
  excerpt:
    'Learn how to install Ollama on Windows, download your first AI model, run local AI, and troubleshoot common beginner problems.',
  category: 'ollama',
  tags: ['Ollama', 'AI', 'Local AI', 'Windows', 'AI Tools', 'Beginners'],
  author: 'ai-engineer-hub',
  publishedDate: '2026-09-10',
  updatedDate: '2026-09-10',
  featuredImage: '',
  featuredImageAlt: 'Ollama logo on a Windows desktop background',
  readingTime: 8,
  seoTitle: 'How to Install Ollama on Windows: Beginner Guide (2026)',
  metaDescription:
    'Learn how to install Ollama on Windows, download your first AI model, run local AI, and troubleshoot common beginner problems.',
  featured: true,
  hasFaq: true,
  faqItems: [
    {
      question: 'Is Ollama free to use?',
      answer:
        'Yes. Ollama is free and open-source software. You can download and use it at no cost. The AI models available through Ollama are also free. You only pay for your own hardware and electricity.',
    },
    {
      question: 'Does Ollama require an internet connection to run?',
      answer:
        'You need an internet connection once to download Ollama and to pull each model. After that, Ollama runs completely offline on your local machine.',
    },
    {
      question: 'How much RAM do I need to run Ollama on Windows?',
      answer:
        'The minimum recommended RAM depends on the model. Smaller models like Phi-3 Mini or Llama 3.2 3B can run with 4–6 GB of available RAM. Larger models require 8 GB or more. 16 GB of total system RAM is a comfortable starting point.',
    },
    {
      question: 'Can I run Ollama without a GPU?',
      answer:
        'Yes. Ollama can run on CPU only. Performance will be slower than with a GPU, but smaller models are still usable on modern CPUs.',
    },
    {
      question: 'What is the difference between Ollama and ChatGPT?',
      answer:
        'ChatGPT is a cloud-based AI service run by OpenAI. Your prompts are sent to OpenAI\'s servers. Ollama runs AI models entirely on your own computer. Your data never leaves your machine.',
    },
  ],
  content: [
    {
      type: 'p',
      text: 'Ollama is a free, open-source tool that lets you run powerful AI language models directly on your own computer. No subscription, no cloud, no data leaving your machine. This guide walks you through installing Ollama on Windows step by step, even if you have never worked with AI tools before.',
    },
    {
      type: 'h2',
      text: 'What is Ollama?',
    },
    {
      type: 'p',
      text: 'Ollama is a command-line application that downloads and runs large language models (LLMs) locally. Think of it as an app store for AI models that runs everything on your PC instead of a remote server.',
    },
    {
      type: 'p',
      text: 'Once installed, you can use Ollama to run models like Llama 3, Mistral, Phi-3, Gemma, and many others. You interact with them through a terminal, through a local API, or through a web interface.',
    },
    {
      type: 'h2',
      text: 'What You Need Before Starting',
    },
    {
      type: 'ul',
      children: [
        { type: 'li', text: 'A Windows 10 or Windows 11 PC (64-bit)' },
        { type: 'li', text: 'At least 8 GB of RAM (16 GB recommended)' },
        { type: 'li', text: 'At least 10 GB of free disk space for models' },
        { type: 'li', text: 'An internet connection for downloading Ollama and models' },
        { type: 'li', text: 'Administrator access to your PC (for installation)' },
      ],
    },
    {
      type: 'p',
      text: 'A GPU (graphics card) is optional. Ollama works without one, but models will run faster if you have an NVIDIA GPU.',
    },
    {
      type: 'h2',
      text: 'Step 1: Download the Ollama Installer',
    },
    {
      type: 'p',
      text: 'Go to the official Ollama website at ollama.com and click the Download button. The website will automatically detect that you are on Windows and offer you the Windows installer.',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Ollama download page showing Windows installer button]',
      alt: 'Ollama download page with the Windows installer button visible',
      caption: 'The Ollama download page detects your operating system automatically.',
    },
    {
      type: 'p',
      text: 'The installer file is named something like OllamaSetup.exe and is around 50–100 MB.',
    },
    {
      type: 'h2',
      text: 'Step 2: Run the Installer',
    },
    {
      type: 'p',
      text: 'Once the download finishes, open OllamaSetup.exe. Windows may show a security prompt asking whether you want to allow the app to make changes. Click Yes to continue.',
    },
    {
      type: 'p',
      text: 'The installer runs automatically and places Ollama in your user\'s AppData folder. You do not need to choose an installation directory. When the installation finishes, Ollama starts running in the background and adds an icon to your system tray (the small icons near the clock in the taskbar).',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Windows system tray showing Ollama icon]',
      alt: 'Windows system tray with Ollama icon visible in the bottom-right corner',
      caption: 'After installation, Ollama runs quietly in the system tray.',
    },
    {
      type: 'h2',
      text: 'Step 3: Open a Terminal',
    },
    {
      type: 'p',
      text: 'To use Ollama, you need to open a terminal. On Windows, you can use Command Prompt or PowerShell. The easiest way:',
    },
    {
      type: 'ol',
      children: [
        { type: 'li', text: 'Press the Windows key on your keyboard.' },
        { type: 'li', text: 'Type "PowerShell" or "Terminal".' },
        { type: 'li', text: 'Press Enter to open it.' },
      ],
    },
    {
      type: 'h2',
      text: 'Step 4: Verify the Installation',
    },
    {
      type: 'p',
      text: 'In the terminal, type the following command and press Enter:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: 'ollama --version',
    },
    {
      type: 'p',
      text: 'Ollama will print its version number, which confirms it is installed and working.',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Ollama version command output in PowerShell]',
      alt: 'PowerShell terminal showing the output of the ollama --version command',
      caption: 'Seeing a version number means Ollama is installed correctly.',
    },
    {
      type: 'h2',
      text: 'Step 5: Download Your First AI Model',
    },
    {
      type: 'p',
      text: 'Now you can download an AI model. For beginners on a typical PC, a good starting model is Llama 3.2 (3 billion parameters), which is small enough to run comfortably and capable enough to have useful conversations.',
    },
    {
      type: 'p',
      text: 'In the terminal, type:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: 'ollama pull llama3.2',
    },
    {
      type: 'p',
      text: 'Ollama will download the model. This may take a few minutes depending on your internet speed. The model is around 2 GB in size.',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Ollama pull command downloading a model]',
      alt: 'Terminal showing Ollama downloading the llama3.2 model with a progress bar',
      caption: 'Ollama shows a progress bar while downloading the model.',
    },
    {
      type: 'h2',
      text: 'Step 6: Run the AI Model',
    },
    {
      type: 'p',
      text: 'Once the model is downloaded, you can start chatting with it:',
    },
    {
      type: 'pre',
      lang: 'bash',
      text: 'ollama run llama3.2',
    },
    {
      type: 'p',
      text: 'The model will load and you will see a prompt where you can type messages. Type anything and press Enter. The model will respond directly in the terminal.',
    },
    {
      type: 'image',
      placeholder: '[SCREENSHOT: Ollama model running and responding to a prompt]',
      alt: 'Terminal showing Ollama running with a chat prompt and a response from the model',
      caption: 'The model responds directly in the terminal.',
    },
    {
      type: 'p',
      text: 'To exit the chat, type /bye and press Enter, or press Ctrl+D.',
    },
    {
      type: 'h2',
      text: 'Useful Ollama Commands',
    },
    {
      type: 'table',
      headers: ['Command', 'What it does'],
      rows: [
        ['ollama --version', 'Show the installed Ollama version'],
        ['ollama pull <model>', 'Download a model'],
        ['ollama run <model>', 'Run a model and start chatting'],
        ['ollama list', 'Show all downloaded models'],
        ['ollama rm <model>', 'Delete a downloaded model'],
        ['ollama serve', 'Start the Ollama API server manually'],
      ],
    },
    {
      type: 'h2',
      text: 'Recommended Models for Beginners',
    },
    {
      type: 'p',
      text: 'Not sure which model to try? Here are good starting points based on your hardware:',
    },
    {
      type: 'table',
      headers: ['Model', 'Pull Command', 'Size', 'Good For'],
      rows: [
        ['Llama 3.2 3B', 'ollama pull llama3.2', '~2 GB', 'Low-end PCs, quick responses'],
        ['Phi-3 Mini', 'ollama pull phi3', '~2.3 GB', 'Low-end PCs, Microsoft model'],
        ['Llama 3.1 8B', 'ollama pull llama3.1', '~4.7 GB', 'Mid-range PCs, better quality'],
        ['Mistral 7B', 'ollama pull mistral', '~4.1 GB', 'General use, fast'],
        ['Gemma 2 9B', 'ollama pull gemma2', '~5.4 GB', 'Google model, well-rounded'],
      ],
    },
    {
      type: 'h2',
      text: 'Troubleshooting Common Problems',
    },
    {
      type: 'h3',
      text: '"ollama" is not recognized as a command',
    },
    {
      type: 'p',
      text: 'If you see this error, close your terminal and open a fresh one. Windows sometimes needs a new terminal session to detect newly installed programs. If the problem persists, try restarting your computer.',
    },
    {
      type: 'h3',
      text: 'The model is very slow',
    },
    {
      type: 'p',
      text: 'Running AI models on CPU only is slower than using a GPU. If your responses take a long time, try a smaller model like Phi-3 Mini or Llama 3.2 3B. These are optimized for lower-resource machines.',
    },
    {
      type: 'h3',
      text: 'Out of memory error',
    },
    {
      type: 'p',
      text: 'If Ollama reports an out-of-memory error, the model requires more RAM than your system has available. Close other applications to free up memory, or switch to a smaller model.',
    },
    {
      type: 'h3',
      text: 'The download seems stuck',
    },
    {
      type: 'p',
      text: 'Large models can take several minutes to download. If the progress bar has not moved for a long time, press Ctrl+C to cancel and try again with the same pull command.',
    },
    {
      type: 'h2',
      text: 'Where Are Models Stored?',
    },
    {
      type: 'p',
      text: 'On Windows, Ollama stores downloaded models in:',
    },
    {
      type: 'pre',
      lang: 'text',
      text: 'C:\\Users\\<YourUsername>\\.ollama\\models',
    },
    {
      type: 'p',
      text: 'Each model can be several gigabytes. If you are running low on disk space, use ollama rm <modelname> to delete models you no longer need.',
    },
    {
      type: 'h2',
      text: 'What to Do Next',
    },
    {
      type: 'p',
      text: 'You have successfully installed Ollama and run your first AI model. Here are some natural next steps:',
    },
    {
      type: 'ul',
      children: [
        { type: 'li', text: 'Learn how to use Ollama with Python to build your own AI applications.' },
        { type: 'li', text: 'Explore the Ollama model library at ollama.com/library to find more models.' },
        { type: 'li', text: 'Try a web UI for Ollama, such as Open WebUI, for a chat-style interface.' },
        { type: 'li', text: 'Read about running AI privately — your data never leaves your computer with Ollama.' },
      ],
    },
    {
      type: 'faq',
      children: [],
    },
  ],
};

export default article;
