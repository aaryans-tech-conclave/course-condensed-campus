import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, MapPin, BookOpen, Calendar, Award, ExternalLink, FileText, Link } from "lucide-react";

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center">
          <h1 className="text-lg font-semibold mb-2">Course Not Found</h1>
          <p className="text-sm text-muted-foreground mb-4">The requested course could not be found.</p>
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="border-b bg-card">
        <div className="max-w-6xl mx-auto p-3">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-sm font-mono text-primary">
                  {course.code}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {course.credits} credits
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
          {/* Left and Middle columns combined - Course Resources and Description */}
          <div className="md:col-span-2 space-y-4">
            {/* Resource Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {course.textbook && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => window.open(course.textbook, '_blank')}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Textbook
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>
              )}
              
              {course.otherReferenceMaterial && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => window.open(course.otherReferenceMaterial, '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Reference
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>
              )}
              
              {course.notes && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => window.open(course.notes, '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Notes
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>
              )}
              
              {course.questionPapers && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => window.open(course.questionPapers, '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Papers
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Button>
              )}
            </div>
            
            {/* Course Description */}
            {course.description && course.description !== "" && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Course Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>
            )}
            
            {/* Prerequisites */}
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
            
            {/* Note and Additional Links Cards - Full Width */}
            <div className="grid gap-4 md:grid-cols-2">
              {course.note && course.note !== "" && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Note
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{course.note}</p>
                  </CardContent>
                </Card>
              )}
              
              {course.additionalLinks && course.additionalLinks.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Link className="w-4 h-4" />
                      Additional Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {course.additionalLinks.map((link, index) => (
                        <div key={index} className="p-2 border rounded">
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto text-sm font-medium"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            {link.description}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          {/* Right column - Course Info */}
          <div className="space-y-4">
            {course.instructor && course.instructor !== "" && (
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
            )}
            
            {((course.schedule?.days && course.schedule.days.length > 0) || 
              (course.schedule?.time && course.schedule.time !== "")) && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {course.schedule?.days && course.schedule.days.length > 0 && (
                    <div className="text-sm">
                      <span className="font-medium">Days:</span> {course.schedule.days.join(", ")}
                    </div>
                  )}
                  {course.schedule?.time && course.schedule.time !== "" && (
                    <div className="text-sm">
                      <span className="font-medium">Time:</span> {course.schedule.time}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
            
            {course.schedule?.location && course.schedule.location !== "" && (
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
            )}
            
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
                {course.season && course.season !== "" && (
                  <div className="text-sm">
                    <span className="font-medium">Season:</span> {course.season}
                  </div>
                )}
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