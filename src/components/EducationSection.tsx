import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Education</h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="mb-1">B.Tech in Information Technology</h4>
                  <p className="text-muted-foreground">Rajagiri School of Engineering and Technology</p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                  2019 - 2023
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}