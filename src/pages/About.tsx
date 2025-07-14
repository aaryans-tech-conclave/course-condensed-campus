import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>About the Website</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            This website contains academic material and useful links for the core subjects of the 
            Department of Electronics and Electrical Communication Engineering, IIT Kharagpur, 
            inspired from the CSE counterpart I saw in my first year. The material is to be of 
            help for you to understand the curriculum beforehand, the goal being simple: help you 
            learn your EECE curriculum faster so you can devote more energy to projects, research, 
            coding, or whatever excites you next.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 