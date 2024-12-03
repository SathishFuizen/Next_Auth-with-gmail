import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="max-w-md">
        <CardHeader>
          <Image src="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600" alt="helo" width={500} height={500}/>
          <CardContent className="font-bold text-2xl">Welcome User</CardContent>

        </CardHeader>

      </Card>

    </main>
    

    
  );

}
