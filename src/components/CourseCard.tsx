import { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, MapPin, BookOpen } from "lucide-react";

interface CourseCardProps {
  course: Course;
  onViewDetails: (courseId: string) => void;
}

export function CourseCard({ course, onViewDetails }: CourseCardProps) {
  return (
    <Card className="h-full hover:shadow-sm transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs font-mono">
                {course.code}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {course.credits} credits
              </Badge>
              <Badge variant="outline" className="text-xs">
                {course.season}
              </Badge>
            </div>
            <h3 className="text-sm font-medium leading-tight mb-1 line-clamp-2">
              {course.name}
            </h3>
            <p className="text-xs text-muted-foreground">{course.department}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-2">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="w-3 h-3" />
          <span>{course.instructor}</span>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{course.schedule.days.join(", ")} • {course.schedule.time}</span>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{course.schedule.location}</span>
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
          {course.description}
        </p>
        
        {course.prerequisites && course.prerequisites.length > 0 && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <BookOpen className="w-3 h-3" />
            <span>Prerequisites: {course.prerequisites.join(", ")}</span>
          </div>
        )}
        
        <Button 
          variant="compact" 
          size="sm" 
          onClick={() => onViewDetails(course.id)}
          className="w-full mt-3"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}