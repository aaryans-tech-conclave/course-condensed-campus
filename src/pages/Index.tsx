import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Users, Filter } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  
  const departments = useMemo(() => {
    const depts = Array.from(new Set(courses.map(course => course.department)));
    return depts.sort();
  }, []);
  
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = searchQuery === "" || 
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = selectedDepartment === "" || 
        course.department === selectedDepartment;
      
      const matchesSemester = selectedSemester === null || 
        course.semester === selectedSemester;
      
      return matchesSearch && matchesDepartment && matchesSemester;
    });
  }, [searchQuery, selectedDepartment, selectedSemester]);
  
  const handleViewDetails = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <h1 className="text-lg font-semibold">University Course Catalog</h1>
          </div>
          
          {/* Semester Navigation */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-muted-foreground">Semester:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              <Button
                variant={selectedSemester === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSemester(null)}
                className="h-6 px-2 text-xs"
              >
                All
              </Button>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                <Button
                  key={sem}
                  variant={selectedSemester === sem ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSemester(sem)}
                  className="h-6 px-2 text-xs"
                >
                  {sem}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2 w-3 h-3 text-muted-foreground" />
              <Input
                placeholder="Search by course name, code, or instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-7 h-7 text-xs"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-3 h-3 text-muted-foreground" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="h-7 px-2 text-xs border border-input bg-background rounded text-foreground"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <Card>
            <CardContent className="p-3">
              <div className="text-center">
                <div className="text-lg font-semibold">{filteredCourses.length}</div>
                <div className="text-xs text-muted-foreground">Courses Found</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3">
              <div className="text-center">
                <div className="text-lg font-semibold">{departments.length}</div>
                <div className="text-xs text-muted-foreground">Departments</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3">
              <div className="text-center">
                <div className="text-lg font-semibold">
                  {Array.from(new Set(filteredCourses.map(c => c.instructor))).length}
                </div>
                <div className="text-xs text-muted-foreground">Instructors</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-3">
              <div className="text-center">
                <div className="text-lg font-semibold">
                  {filteredCourses.reduce((sum, course) => sum + course.credits, 0)}
                </div>
                <div className="text-xs text-muted-foreground">Total Credits</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-muted-foreground">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No courses found matching your search criteria.</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDepartment("");
                    setSelectedSemester(null);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
