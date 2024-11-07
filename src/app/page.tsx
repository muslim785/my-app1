import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";

export type sectionData = {
  topMain: boolean
  mainBackground: boolean
  textCenter: boolean
  title: string
  paragraph: string
  button: string
  rightSection: {
    isBackground: boolean
    isImage: boolean
  }
}

export default function Home() {


  // My Hero section all data
  const data: sectionData[] = [
    {
      topMain: false,
      mainBackground: true,
      textCenter: false,
      title: "Get More Done with whitepace",
      paragraph: "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
      button: "Try Whitepace free",
      rightSection: { isBackground: true, isImage: false }
    },
    {
      topMain: false,
      mainBackground: false,
      textCenter: false,
      title: "Project Management",
      paragraph: "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
      button: "Get Started",
      rightSection: { isBackground: true, isImage: false }
    },
    {
      topMain: true,
      mainBackground: false,
      textCenter: false,
      title: "Work\ntogeather",
      paragraph: "With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.",
      button: "Try it now",
      rightSection: { isBackground: false, isImage: true }
    },
    {
      topMain: false,
      mainBackground: true,
      textCenter: false,
      title: "Get More Done with whitepace",
      paragraph: "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
      button: "Try Whitepace free",
      rightSection: { isBackground: true, isImage: false }
    },
    {
      topMain: true,
      mainBackground: false,
      textCenter: false,
      title: "Customise it\nto your needs",
      paragraph: "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
      button: "Let’s Go",
      rightSection: { isBackground: true, isImage: false }
    },
    {
      topMain: true,
      mainBackground: true,
      textCenter: true,
      title: "Your work, everywhere you are",
      paragraph: "Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!",
      button: "Try Taskey",
      rightSection: { isBackground: false, isImage: false }
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* // Here i run my map loo over the hero section data*/}
      {data.map((item, index) => (
        // here i can export the hero section data with the help of props
        <Hero key={index} data={item} />
      ))}
      <Sponsors />
      <Footer />
    </div>
  );
}