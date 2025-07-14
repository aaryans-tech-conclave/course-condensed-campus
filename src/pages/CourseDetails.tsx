import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Clock, MapPin, BookOpen, Calendar, Award } from "lucide-react";

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-lg font-semibold mb-2">Course Not Found</h1>
            <p className="text-sm text-muted-foreground mb-4">The requested course could not be found.</p>
            <Button variant="outline" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="w-3 h-3" />
              Back to Courses
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="max-w-6xl mx-auto p-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/")}
            className="mb-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Courses
          </Button>
          
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-sm font-mono">
                  {course.code}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {course.credits} credits
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Semester {course.semester} - {course.season}
                </Badge>
              </div>
              <h1 className="text-xl font-semibold mb-1">{course.name}</h1>
              <p className="text-sm text-muted-foreground">{course.department}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Course Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>
            
            {course.prerequisites && course.prerequisites.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {course.prerequisites.map((prereq, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {prereq}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Instructor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">{course.instructor}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Days:</span> {course.schedule.days.join(", ")}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Time:</span> {course.schedule.time}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{course.schedule.location}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Course Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Credits:</span> {course.credits}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Semester:</span> {course.semester} - {course.season}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Department:</span> {course.department}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}