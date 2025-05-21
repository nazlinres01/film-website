import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

interface FilmCardProps {
  id: string | number
  title: string
  year: string
  rating: string
  image: string
}

export function FilmCard({ id, title, year, rating, image }: FilmCardProps) {
  return (
    <Link href={`/film/${id}`}>
      <Card className="overflow-hidden border-0 bg-muted/40">
        <div className="relative aspect-[2/3] overflow-hidden rounded-t-md">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-primary font-medium rounded-md px-1.5 py-0.5 text-sm">
            {rating}
          </div>
        </div>
        <CardContent className="p-4">
          <CardTitle className="line-clamp-1 text-base">{title}</CardTitle>
          <CardDescription>{year}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
