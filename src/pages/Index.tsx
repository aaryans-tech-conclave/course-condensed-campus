import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Users, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  
  const departments = useMemo(() => {
    const depts = Array.from(new Set(courses.map(course => course.department)));
    return depts.sort();
  }, []);
  
  // Filter only by search and department
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = searchQuery === "" || 
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = selectedDepartment === "" || 
        course.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);
  
  const handleViewDetails = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };
  
  // Calculate unique instructors excluding empty values
  const uniqueInstructors = useMemo(() => {
    const instructors = new Set(
      filteredCourses
        .map(c => c.instructor)
        .filter(instructor => instructor && instructor.trim() !== "")
    );
    return instructors.size;
  }, [filteredCourses]);
  
  // Define semester courses
  const semester3CourseIds = [
    "EC21203", "EC21205", "EC21207", "EC29203", 
    "EC29205", "EC29207", "MA20205"
  ];
  
  const semester4CourseIds = [
    "EC21204", "EC21202", "EC21206", "EC21208",
    "EC29202", "EC21210"
  ];
  
  const semester5CourseIds = [
    "EC39201", "EC31203", "EC39005", "EC31005",
    "EC31205", "EC31201", "EC39001"
  ];
  
  const semester6CourseIds = [
    "EC31204", "EC30202", "EC31004", "EC31202",
    "EC39202", "EC39002", "EC39004", "EC60294"
  ];
  
  const getSemesterCourses = (courseIds: string[]) => {
    return courses.filter(course => courseIds.includes(course.id));
  };
  
  const semester3Courses = getSemesterCourses(semester3CourseIds);
  const semester4Courses = getSemesterCourses(semester4CourseIds);
  const semester5Courses = getSemesterCourses(semester5CourseIds);
  const semester6Courses = getSemesterCourses(semester6CourseIds);
  
  const renderCourseTiles = (semesterCourses: typeof courses) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {semesterCourses.map(course => (
        <Card 
          key={course.id} 
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => handleViewDetails(course.id)}
        >
          <CardContent className="p-4">
            <div className="space-y-1">
              <div className="font-mono text-sm font-medium">
                {course.code}
              </div>
              <div className="text-sm text-muted-foreground">
                {course.name}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
  
  return (
    <div>
      {/* Semester Tabs */}
      <div className="border-b bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <Tabs defaultValue="3" className="w-full">
            <TabsList className="grid grid-cols-6 w-full">
              {[3, 4, 5, 6, 7, 8].map(sem => (
                <TabsTrigger key={sem} value={sem.toString()} className="text-primary">
                  Semester {sem}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* Tab Content Area */}
            <div className="mt-4 mb-2">
              {/* Semester 3 */}
              <TabsContent value="3" className="mt-0">
                <Card>
                  <CardContent className="p-4">
                    {renderCourseTiles(semester3Courses)}
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Semester 4 */}
              <TabsContent value="4" className="mt-0">
                <Card>
                  <CardContent className="p-4">
                    {renderCourseTiles(semester4Courses)}
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Semester 5 */}
              <TabsContent value="5" className="mt-0">
                <Card>
                  <CardContent className="p-4">
                    {renderCourseTiles(semester5Courses)}
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Semester 6 */}
              <TabsContent value="6" className="mt-0">
                <Card>
                  <CardContent className="p-4">
                    {renderCourseTiles(semester6Courses)}
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Other semesters */}
              {[7, 8].map(sem => (
                <TabsContent key={sem} value={sem.toString()} className="mt-0">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm text-center">Coming soon</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="border-b bg-card">
        <div className="max-w-6xl mx-auto p-4">
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
      
      {/* Stats and Course Grid */}
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
                  {uniqueInstructors}
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
