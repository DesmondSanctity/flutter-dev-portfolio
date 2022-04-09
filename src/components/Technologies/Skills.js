import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiKotlin } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>I create production ready Android Apps using Java.</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for Android app development.</>,
  },
  {
    slug: "kotlin",
    Component: SiKotlin,
    title: "Kotlin",
    Description: () => <>I have written dozens of Kotlin codes for various purposes.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
