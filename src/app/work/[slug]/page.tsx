import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

interface WorkItem {
  image: string;
  title: string;
  client: string;
  slug: string;
}

// This function generates the static paths at build time
export async function generateStaticParams() {
  try {
    // In static export mode, we need to read the file directly
    // You might need to adjust this path based on your build setup
    const fs = require('fs');
    const path = require('path');
    
    // Try to read from public directory first
    let workData;
    try {
      const filePath = path.join(process.cwd(), 'public', 'data', 'work-data.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      workData = JSON.parse(fileContents);
    } catch (error) {
      // Fallback: return empty array if file can't be read
      console.warn('Could not read work-data.json for static generation:', error);
      return [];
    }

    return workData.workData.map((work: WorkItem) => ({
      slug: work.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Static data fetching function
async function getWorkItem(slug: string): Promise<WorkItem | null> {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const filePath = path.join(process.cwd(), 'public', 'data', 'work-data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return data.workData.find((work: WorkItem) => work.slug === slug) || null;
  } catch (error) {
    console.error('Error reading work data:', error);
    return null;
  }
}

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

const WorkDetailPage = async ({ params }: WorkDetailPageProps) => {
  const workItem = await getWorkItem(params.slug);

  if (!workItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Work Not Found</h1>
          <Link href="/" className="text-orange-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-softGray">
      <div className="container mx-auto px-4 py-16">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-orange-500 hover:underline mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Work detail content */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{workItem.title}</h1>
            <p className="text-xl text-gray-600">Client: {workItem.client}</p>
          </div>

          <div className="mb-8">
            <Image
              src={getImgPath(workItem.image)}
              alt={workItem.title}
              width={800}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Add more content here as needed */}
          <div className="prose max-w-none">
            <h2>Project Overview</h2>
            <p>
              This is a detailed view of the {workItem.title} project. 
              You can add more project details, descriptions, technologies used, 
              challenges faced, and outcomes here.
            </p>
            
            <h3>Technologies Used</h3>
            <p>Add the technologies and tools used for this project.</p>
            
            <h3>Project Goals</h3>
            <p>Describe the main objectives and goals of this project.</p>
            
            <h3>Results</h3>
            <p>Share the outcomes and results achieved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;