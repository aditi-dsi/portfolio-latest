import Image from "next/image";
export default function Sections() {
  return (
    <div className="bg-[#000000] w-full py-20 text-gray-200 px-12 sm:px-16 md:px-20 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-20 sm:px-8 md:px-12 lg:px-16 xl:px-16">
        {/* Projects Section */}
        <div id="work-experience" className="space-y-12">
          <h2 className="text-2xl font-mono mb-8">Work Experience</h2>

          <div className="space-y-8">

            <div className="relative border border-gray-900 rounded-md p-6 lg:mr-20">
               <span className="absolute -top-2 -left-2 bg-white text-black text-[10px] px-2 py-[2px] leading-[16px] font-bold rounded-full font-sans shadow-md">
                Current
              </span>
             <h3 className="font-mono">Software Engineer Intern</h3> 
             <h4 className="font-mono text-sm text-gray-400 mt-3 mb-3"><a target="_blank" href="https://eval.ai" className="underline underline-offset-4">EvalAI (by CloudCV)</a> &bull; Georgia, USA (Remote)</h4> 
                <ol className="font-mono text-sm text-gray-400 mt-1">
                  <li className="pl-4">&bull; Contributing under Google Summer of Code 2025.</li>
                  <li className="pl-4">&bull; Worked on UI/UX for EvalAI&rsquo;s main dashboard.</li>
                  <li className="pl-4">&bull; Wrote test cases for modules to increase coverage.</li>
                  <li className="pl-4">&bull; Improved the UI/UX & content of Documentation site.</li>
                  <li className="pl-4">&bull; Working on RAG-based chat assistant for enhanced support.</li>
                </ol>
            </div>

            <div className="relative border border-gray-900 rounded-md p-6 lg:mr-20">
              <span className="absolute -top-2 -left-2 bg-white text-black text-[10px] px-2 py-[2px] leading-[16px] font-bold rounded-full font-sans shadow-md">
                Current
              </span>
             <h3 className="font-mono">Developer Relations Engineer</h3> 
             <h4 className="font-mono text-sm text-gray-400 mt-3 mb-3"><a target="_blank" href="https://nodeshift.com" className="underline underline-offset-4">NodeShift</a> &bull; Abu Dhabi, UAE (Remote)</h4> 
                <ol className="font-mono text-sm text-gray-400 mt-1">
                  <li className="pl-4">&bull; Managing Developer Relations & Technical content.</li>
                  <li className="pl-4">&bull; Coordinating with engineering to resolve user queries.</li>
                  <li className="pl-4">&bull; Showcasing platform capabilities through tutorials, videos, & example snippets.</li>
                </ol>
            </div>

            <div className="relative border border-gray-900 rounded-md p-6 lg:mr-20">
             <h3 className="font-mono">Software Engineering Contributor</h3> 
             <h4 className="font-mono text-sm text-gray-400 mt-3 mb-3"><a target="_blank" href="https://satlokashram.org/" className="underline underline-offset-4">Satlok Ashram AI (Non-Profit)</a> &bull; New Delhi, India</h4> 
                <ol className="font-mono text-sm text-gray-400 mt-1">
                  <li className="pl-4">&bull; Contributed in fine-tuning Voice cloning model for a specific reference voice.</li>
                  <li className="pl-4">&bull; Integrated  for multilingual speech specifically for low resources Indic languages like Hindi, Punjabi, Bangla, etc. (Wav2Vec2, F5-TTS).</li>
                  <li className="pl-4">&bull; Designed RAG solution for QnA from holy books.</li>
                  <li className="pl-4">&bull; Working on fine-tuning LLM (Llama, Gemma) with large dataset for end-to-end multilingual & multimodal spiritual conversation (Hindi, English).</li>
                </ol>
            </div>

            <div className="relative border border-gray-900 rounded-md p-6 lg:mr-20">
             <h3 className="font-mono">Software Engineer Intern</h3> 
             <h4 className="font-mono text-sm text-gray-400 mt-3 mb-3"><a target="_blank" href="https://hcltech.com/" className="underline underline-offset-4">HCLTech</a> &bull; Noida, India</h4> 
                <ol className="font-mono text-sm text-gray-400 mt-1">
                  <li className="pl-4">&bull; Got hands on training under senior developers to understand industry insights.</li>
                  <li className="pl-4">&bull; Resolved L1 bugs & client tickets related to production server, deployment, & Linux environments.</li>
                  <li className="pl-4">&bull; Represented the work of interns team to cross functional teams & management.</li>
                </ol>
            </div>

            <div>    
            <p className="font-mono text-sm text-gray-400 mt-1">
                <a className="text-[#d577a6] hover:text-[#ff7abd] underline underline-offset-4" target="_blank" href="https://linkedin.com/in/aditi-bindal">and more..</a>
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="space-y-12">
          <h2 className="text-2xl font-mono mb-8">Projects</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono">OpenSorus: AI Maintainer Agent for GitHub Issues
              </h3>
              <a
                href="https://huggingface.co/spaces/Agents-MCP-Hackathon/OpenSorus"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                huggingface.co/spaces/OpenSorus
              </a>
              <Image src="/assets/opensorus-demo-pic.png" alt="OpenSorus Project" width={800} height={600} className="mx-auto mt-6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-auto" />
              <p className="font-mono text-sm text-gray-400 mt-4 lg:mr-10">
              OpenSorus is an autonomous GitHub Issues Maintainer Agent that augments open-source triage by aligning developer queries with semantically searched & indexed codebase contexts. Leveraging retrieval-augmented generation with LlamaIndex and Mistral’s Codestral model, the agent crafts and posts real-time, context-aware replies directly on GitHub. 
              <br />
              <br />
              Demo Interface is built with Gradio, and can be integrated seamlessly via GitHub App. This project has been recognized with the <b>Mistral AI Choice Award</b> at Hugging Face’s global <a href="https://www.linkedin.com/posts/gradio_mistral-ai-choice-award-of-2000-worth-activity-7342964476335333376-hO-N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-O88UB6LbPYkWi4fV4jUy0XRf50XsN72Y" className="underline">Gradio Agents & MCP Hackathon</a>.              
              </p>
            </div>
            <div>
              <h3 className="font-mono">Attention Is All You Need: Transformers Implementation From Scratch</h3>
              <a
                href="https://github.com/aditi-dsi/attention-is-all-you-need"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                github.com/aditi-dsi/attention-is-all-you-need
              </a>
              <Image src="/assets/transformers-project-banner.jpeg" alt="Transformers Project" width={800} height={600} className="mx-auto mt-6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-auto"/>
              <p className="font-mono text-sm text-gray-400 mt-4 lg:mr-10">
              A ground-up PyTorch implementation of the original Transformer architecture as proposed in the paper “Attention is All You Need”. This project dissects core components like multi-head self-attention, position-wise feedforward networks, and layer normalization, reconstructing them from first principles to offer deep transparency into the model’s mechanics.
              <br />
              <br />
              The implementation is heavily inspired by Professor Dr. Arun Rajkumar’s lectures for the course <a href="https://youtu.be/mbSMzeCQ0NU?si=y5uabjt5BQgnwjd-" className="underline">Responsible & Safe AI Systems</a>, and it serves both as an educational reference and a minimal baseline for understanding modern NLP architectures.
              </p>
            </div>
            <div>
              <h3 className="font-mono">Dog Breed Classifier: Pretrained-CNN Image Classifier</h3>
              <a
                href="https://github.com/aditi-dsi/DogBreedClassifier"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                github.com/aditi-dsi/DogBreedClassifier
              </a>
              <Image src="/assets/dog-classifier-banner.png" alt="Dog Breed Classifier Project" width={800} height={600} className="mx-auto mt-6 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-auto" />
              <p className="font-mono text-sm text-gray-400 mt-4 lg:mr-10">
              A comparative image classification pipeline leveraging pre-trained convolutional neural networks (AlexNet, VGG, ResNet) to distinguish dog breeds with high accuracy across varied input scenarios. The system evaluates model robustness on both canonical pet datasets and real-world edge cases, enabling inference on custom user images through a lightweight batch script. Built to benchmark architectural performance in fine-grained visual recognition tasks.
              <br />
              <br />
              This project was part of my hands-on lab work in the AI & ML Nanodegree Program, completed as a scholarship recipient of the AWS AI & ML Scholarship.
              </p>
            </div>

            <div>
            <p className="font-mono text-sm text-gray-400 mt-1">
              <a className="text-[#d577a6] hover:text-[#ff7abd] underline underline-offset-4" target="_blank" href="https://github.com/aditi-dsi">and more..</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-20 pr-16 mt-20 sm:px-8 md:px-12 lg:px-16 xl:px-16">
     {/* Articles Section */}
        <div id="blogs" className="space-y-12">
          <div className="space-y-4">
          <h2 className="text-2xl font-mono">Blogs</h2>
          <p className="font-mono text-[15px] text-gray-400 mb-8">A curated list of my most-read technical articles & tutorials.</p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-mono">A Step-by-Step Guide to Install DeepSeek-R1 Locally with Ollama, vLLM or Transformers
              </h3>
              <a
                href="https://dev.to/nodeshiftcloud/a-step-by-step-guide-to-install-deepseek-r1-locally-with-ollama-vllm-or-transformers-44a1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                dev.to/nodeshiftcloud/deepseek-r1
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1 lg:mr-10">
              DeepSeek-R1 is making waves in the AI community as a powerful open-source reasoning model, offering advanced capabilities that...              
              </p>
            </div>
            <div>
              <h3 className="font-mono">How to Install & Run OpenManus Locally with Ollama – No API Keys Required</h3>
              <a
                href="https://dev.to/nodeshiftcloud/how-to-install-run-openmanus-locally-with-ollama-no-api-keys-required-2o4i"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                dev.to/nodeshiftcloud/openmanus
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1 lg:mr-10">
              OpenManus is an open-source alternative to the groundbreaking Manus AI agent, developed by the MetaGPT community. Manus itself is...
              </p>
            </div>
            <div>
              <h3 className="font-mono">A Step-by-Step Guide to Install Gemma-3 Locally with Ollama or Transformers</h3>
              <a
                href="https://dev.to/nodeshiftcloud/a-step-by-step-guide-to-install-gemma-3-locally-with-ollama-or-transformers-12g6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                dev.to/nodeshiftcloud/gemma3
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1 lg:mr-10">
              Gemma-3 is Google’s latest open-weight large language model (LLM), pushing the boundaries of AI with...
              </p>
            </div>

            <div>
              <h3 className="font-mono">Build a Browser Use Agent with DeepSeek: A Step-by-Step Guide</h3>
              <a
                href="https://dev.to/nodeshiftcloud/build-a-browser-use-agent-with-deepseek-a-step-by-step-guide-2n59"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                dev.to/nodeshiftcloud/browser-use-agent
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1 lg:mr-10">
              The intersection of AI with web automation introduces a novel concept known as Browser Use agents. This concept enables...
              </p>
            </div>

            <div>
              <h3 className="font-mono">Build Your Own AI Agent in Minutes with Eliza: A Complete Guide</h3>
              <a
                href="https://dev.to/nodeshiftcloud/build-your-own-ai-agent-in-minutes-with-eliza-a-complete-guide-263l"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                dev.to/nodeshiftcloud/aiagent
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1 lg:mr-10">
              Building your own AI agent has never been easier than the current...
              </p>
            </div>

            <div>
            <p className="font-mono text-sm text-gray-400 mt-1">
              <a className="text-[#d577a6] hover:text-[#ff7abd] underline underline-offset-4" target="_blank" href="https://dev.to/aditi_b">and many more..</a>
              </p>
            </div>
          </div>
        </div>
  </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-20 pr-16 mt-20 sm:px-8 md:px-12 lg:px-16 xl:px-16">
     {/* Links Section */}
        <div id="links" className="space-y-12">
          <div className="space-y-4">
          <h2 className="text-2xl font-mono">Links</h2>
          </div>
          <div className="space-y-8">
            <div>
              <a
                href="https://github.com/aditi-dsi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-md underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                github
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/aditi-bindal"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-md underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                linkedin
              </a>
            </div>
            <div>
              <a
                href="https://x.com/halfacupoftea_"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-md underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                twitter
              </a>
            </div>
            <div>
              <a
                href="https://dev.to/aditi_b"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-md underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                dev.to
              </a>
            </div>
            <div>
              <a
                href="mailto:aditii.b6@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-md underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                email
              </a>
            </div>
          </div>
        </div>
  </div>
    </div>
  );
}
