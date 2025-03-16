import { ArrowRight, Lightbulb, Shield, Users } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TraitCardProps {
  title: string
  description: string
  icon: "ArrowRight" | "Lightbulb" | "Users" | "Shield"
}

export default function TraitCard({ title, description, icon }: TraitCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "ArrowRight":
        return <ArrowRight className="h-10 w-10 text-primary" />
      case "Lightbulb":
        return <Lightbulb className="h-10 w-10 text-primary" />
      case "Users":
        return <Users className="h-10 w-10 text-primary" />
      case "Shield":
        return <Shield className="h-10 w-10 text-primary" />
      default:
        return <ArrowRight className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader className="pb-2">
        <IconComponent />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

