// Example page for using multiple Layouts
// Resource for using multiple layouts in Next.Js: https://www.codeconcisely.com/posts/nextjs-multiple-layouts/
// Will need to implement when building the onboarding screens with the logo navbar and no footer
import { OnboardingLayout } from "@/components/Layouts/OnboardingLayout";

export default function OnboardingLayoutPage() {
  return <>Page with onboarding layout - simple navbar and no footer</>;
}

OnboardingLayoutPage.getLayout = function (page) {
  return <OnboardingLayout>{page}</OnboardingLayout>;
};

// A couple things are happening here:

// Define a getLayout function on your layout component (or choose a name you want)
// Next.js passes this function current page through its first parameter, in this case — page.
// The JSX you return from this function is used as the layout for this page. This is how you can wrap the page in another layout — LayoutWithSidebar.
