import { notFound } from "next/navigation";
import IncidentDetails from "@/components/IncidentDetails";

// This is a mock function. In a real app, you'd fetch this data from an API or database.
async function getIncidentData(hash: string) {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data
  interface Incident {
    date: string;
    inactiveValidators: number;
    resolved: boolean;
    startTime: string;
    validators: Array<{
      id: string;
      link: string;
    }>;
  }

  const incidents: Record<string, Incident> = {
    abc123: {
      date: "2023-06-15T10:30:00Z",
      inactiveValidators: 5,
      resolved: false,
      startTime: "2023-06-15T10:30:00Z",
      validators: [
        { id: "1", link: "https://example.com/validator/1" },
        { id: "2", link: "https://example.com/validator/2" },
        { id: "3", link: "https://example.com/validator/3" },
        { id: "4", link: "https://example.com/validator/4" },
        { id: "5", link: "https://example.com/validator/5" },
      ],
    },
  };

  return incidents[hash] || null;
}

export default async function IncidentPage({
  params,
}: {
  params: { hash: string };
}) {
  const incidentData = await getIncidentData(params.hash);

  if (!incidentData) {
    notFound();
  }

  return <IncidentDetails incident={incidentData} />;
}
