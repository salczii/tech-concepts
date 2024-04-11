import "./App.css";
type myTopicsType = {
  [topic: string]: string[];
};

const myTopics: myTopicsType = {
  CSS: ["Flexbox", "Grid", "flux", "Sass", "tailwind"],
  OOP: [
    "Classes",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Abstraction",
    "Interfaces",
    "Abstract Classes",
  ],
  React: [
    "state",
    "props",
    "useEffect",
    "useContext",
    "useReducer",
    "useRef",
    "useMemo",
    "useCallback",
    "custom hooks",
    "context",
    "reducer",
    "portals",
    "fragments",
    "error boundaries",
    "forward refs",
    "memo",
    "lazy",
    "suspense",
    "concurrent mode",
    "strict mode",
    "render props",
    "higher order components",
    "controlled components",
    "uncontrolled components",
    "hooks",
    "context",
    "refs",
    "portals",
    "fragments",
    "error boundaries",
    "forward refs",
    "memo",
    "lazy",
    "suspense",
    "concurrent mode",
    "strict mode",
    "render props",
    "higher order components",
    "controlled components",
    "uncontrolled components",
  ],
  frontendLibraries: ["Redux", "react-router", "Tanstack-Query"],
  Git: [
    "git rebase",
    "git merge",
    "git pull",
    "git push",
    "git clone",
    "git init",
    "git add",
    "git commit",
    "git status",
    "git log",
    "git branch",
    "git checkout",
    "git reset",
    "git revert",
    "git stash",
    "git cherry-pick",
    "git reflog",
    "git tag",
    "git fetch",
    "git remote",
    "git show",
    "git diff",
  ],
  frontendFrameworks: ["React", "Angular", "Next.js"],
  dataStructures: [
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "Hash Tables",
  ],
  Algorithms: ["Sorting", "Searching", "Divide and Conquer"],
  backendFrameworks: ["Express", "Nest.js", "Fastify"],
  SQL: [
    "select",
    "insert",
    "update",
    "delete",
    "joins",
    "group by",
    "having",
    "order by",
    "limit",
    "offset",
    "distinct",
    "subqueries",
    "unions",
    "views",
    "indexes",
    "transactions",
    "constraints",
    "functions",
    "triggers",
    "stored procedures",
  ],
  terminalCommands: [
    "cd",
    "ls",
    "pwd",
    "touch",
    "mkdir",
    "rm",
    "rmdir",
    "mv",
    "cp",
    "cat",
    "echo",
    "clear",
    "history",
    "curl",
    "nano",
    "less",
    "grep",
    "find",
    "tar",
    "zip",
    "unzip",
    "ssh",
    "tail",
    "head",
    "kill",
    "ps",
    "sed",
    "awk",
    "chmod",
    "chown",
  ],
};

const TopicList: React.FC<{ topics: myTopicsType }> = ({ topics }) => {
  return (
    <div>
      {Object.entries(topics).map(([topicKey, subtopics]) => (
        <Topic key={topicKey} topicName={topicKey} subtopics={subtopics} />
      ))}
    </div>
  );
};

const Topic: React.FC<{ topicName: string; subtopics: string[] }> = ({
  topicName,
  subtopics,
}) => {
  return (
    <div>
      <h2>{topicName}</h2>
      <ul>
        {subtopics.map((subtopic, index) => (
          <li key={index}>{subtopic}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Topics</h1>
      <TopicList topics={myTopics} />
    </>
  );
}

export default App;
