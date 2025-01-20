import VerticalLinks from "./VerticalLinks";

export default function Sections() {
  return (
    <div className="bg-[#000000] w-full py-20 text-gray-200 px-12 sm:px-16 md:px-20 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pr-16">
        {/* Projects Section */}
        <div className="space-y-12">
          <h2 className="text-2xl font-mono mb-8">Projects and Employers</h2>

          <div className="space-y-8">
            <div>
             <h3 className="font-mono"><a target="_blank" href="https://nodeshift.com" className="underline underline-offset-4">NodeShift</a> - DEPIN Cloud</h3> 
              <p className="font-mono text-sm text-gray-400 mt-1">
                Managing Developer Relations, technical content 
              </p>
            </div>

            <div>
             <h3 className="font-mono"><a target="_blank" href="https://aisuite.shwetlabs.com" className="underline underline-offset-4">AISuite</a></h3> 
              <p className="font-mono text-sm text-gray-400 mt-1">
                Developed AI powered content management suite
              </p>
            </div>

            

            <div>
            <h3 className="font-mono"><a target="_blank" href="https://shwet.xyz" className="underline underline-offset-4">Shwet 2.0</a> - DeAI collaboration (Solana Radar project)</h3>
              <p className="font-mono text-sm text-gray-400 mt-1">
                Managed wallet integration for solana transactions  
              </p>
            </div>

            <div>
            <h3 className="font-mono"><a target="_blank" href="https://github.com/yash-sangwan/Shwet" className="underline underline-offset-4">Shwet</a> - Truth Chain dapp (A Solana Hackathon winner)</h3>
              <p className="font-mono text-sm text-gray-400 mt-1">
                Developed backend & smart contracts on Solana  
              </p>
            </div>

            <div>
            <h3 className="font-mono"><a target="_blank" href="https://wobot.ai" className="underline underline-offset-4">Wobot AI</a> - Video intelligence software</h3>
              
              <p className="font-mono text-sm text-gray-400 mt-1">
                Built product documentation, blogs, usage guides 
              </p>
            </div>

            <div>
            <h3 className="font-mono"><a target="_blank" href="https://blackwell.vercel.app" className="underline underline-offset-4">BlackWell</a> - a token utility dapp</h3>
              
              <p className="font-mono text-sm text-gray-400 mt-1">
                Developed everything: staker, credit scoring on wallet history, etc. 
              </p>
            </div>

            <div>
            <h3 className="font-mono"><a target="_blank" href="https://hcltech.com" className="underline underline-offset-4">HCLTech</a> - IT services</h3>
              
              <p className="font-mono text-sm text-gray-400 mt-1">
                Managed systems (OS, servers, migrations) 
              </p>
            </div>

            <div>
            <h3 className="font-mono"><a target="_blank" href="https://www.gogirlorganisation.com/" className="underline underline-offset-4">Go Girl</a> - Non-profit for tech education</h3>
              
              <p className="font-mono text-sm text-gray-400 mt-1">
                Mentored students in web dev through in-person workshops
              </p>
            </div>

            <div>
            <h3 className="font-mono"><a target="_blank" href="https://sakshamsociety.in" className="underline underline-offset-4">Saksham Org.</a> - Freelance project</h3>
              
              <p className="font-mono text-sm text-gray-400 mt-1">
                Developed official website of the org. with content
              </p>
            </div>

            <div>    
            <p className="font-mono text-sm text-gray-400 mt-1">
                <a className="text-[#d577a6] hover:text-[#ff7abd] underline underline-offset-4" target="_blank" href="https://github.com/aditi-dsi">and more..</a>
              </p>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="space-y-12">
          <h2 className="text-2xl font-mono mb-8">Articles and Blogs</h2>

          <div className="space-y-8">
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
              <p className="font-mono text-sm text-gray-400 mt-1">
              Building your own AI agent has never been easier than the current increasing trend towards AI agents. AI agents are systems...
              </p>
            </div>

            <div>
              <h3 className="font-mono">Running a Validator Node: Everything You Need to Know
              </h3>
              <a
                href="https://dev.to/nodeshiftcloud/running-a-validator-node-everything-you-need-to-know-570j"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                dev.to/nodeshiftcloud/validators
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1">
              Blockchain networks rely on decentralization, and validator nodes are key to maintain decentralization. These nodes...
              </p>
            </div>

            <div>
              <h3 className="font-mono">How to Run a Polygon Node: A Complete Guide</h3>
              <a
                href="https://nodeshift.com/blog/how-to-run-a-polygon-node-a-complete-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                nodeshift.com/blog/polygon
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1">
              Polygon is a Layer 2 Blockchain designed to address Ethereum’s scaling challenges. It enables faster transactions and...
              </p>
            </div>

            <div>
              <h3 className="font-mono">Myths about dStorage (Decentralized Storage)
              </h3>
              <a
                href="https://medium.com/coinmonks/myths-about-dstorage-decentralized-storage-997eba263732"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
              >
                medium.com/coinmonks/dstorage
              </a>
              <p className="font-mono text-sm text-gray-400 mt-1">
              “I can’t store my data in a stranger’s house!” The above statement is the most common fear of beginners when they first hear...
              </p>
            </div>

            <div>
            <p className="font-mono text-sm text-gray-400 mt-1">
              <a className="text-[#d577a6] hover:text-[#ff7abd] underline underline-offset-4" target="_blank" href="https://puzzling-flare-f4a.notion.site/Aditi-s-Write-Ups-167b998a04c9808cbbfad324be3d1362">and many more..</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Social Links - For mobile/tablet */}
      <div className="lg:hidden mt-20 flex ">
        <div className="inline-block">
          <VerticalLinks />
        </div>
      </div>
    </div>
  );
}
