import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <Logo />
          <h1 className="text-3xl font-bold text-primary">ClarityFlow</h1>
        </div>
        <p className="text-muted-foreground">Manage client projects with clarity</p>
        <Tabs defaultValue="client" className="w-[400px] mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client">Client Login</TabsTrigger>
            <TabsTrigger value="admin">Admin Login</TabsTrigger>
          </TabsList>
          <TabsContent value="client">
            <Card>
              <CardHeader>
                <CardTitle>Client Access</CardTitle>
                <CardDescription>
                  Enter your credentials to access your project dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="client-email">Email</Label>
                  <Input id="client-email" type="email" placeholder="client@example.com" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="client-password">Password</Label>
                    <Link href="#" className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="client-password" type="password" />
                </div>
                <Button type="submit" className="w-full" asChild>
                  <Link href="/client/dashboard">Sign in as Client</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Admin Access</CardTitle>
                <CardDescription>
                  Enter your credentials to access the admin panel.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@clarityflow.com" />
                </div>
                <div className="space-y-2">
                <div className="flex items-center">
                    <Label htmlFor="admin-password">Password</Label>
                    <Link href="#" className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="admin-password" type="password" />
                </div>
                <Button type="submit" className="w-full" asChild>
                  <Link href="/admin/dashboard">Sign in as Admin</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
