import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Users, FileText } from "lucide-react";

export default function Collaborate() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Page Title */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Collaborate with us
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Main Content Card - Takes 2 columns on desktop */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Share Your Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed">
              Please fill this form, search the scans that you might have once taken and upload 
              the same, leaving the rest to me, I'll get this compiled.
            </p>
            
            <p className="text-sm">
              Form:{" "}
              <a 
                href="https://forms.gle/bYUK4NxvHJ5eF1mP9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Content Form
              </a>
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground pt-2">
              This was a sustained effort I was willing to make, one that I hope you all would 
              respect and pitch into as well, to hopefully help all upcoming batches raise their 
              bar as students of our department. Thank you.
            </p>
          </CardContent>
        </Card>

        {/* Contact Card - Takes 1 column on desktop */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              For any queries, suggestions or anything else:
            </p>
            <a 
              href="mailto:eecehelp@gmail.com" 
              className="text-sm text-primary hover:underline"
            >
              eecehelp@gmail.com
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 