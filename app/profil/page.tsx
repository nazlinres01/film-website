import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FilmCard } from "@/components/film-card"
import { Bell, Edit, LogOut, Settings, User } from "lucide-react"

export default function ProfilPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          <aside className="space-y-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex flex-col items-center space-y-4 pt-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profil Fotoğrafı" />
                    <AvatarFallback>AY</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">Ahmet Yılmaz</h2>
                    <p className="text-sm text-muted-foreground">@ahmetyilmaz</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Profili Düzenle
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Profil
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Bell className="h-4 w-4" />
                Bildirimler
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Ayarlar
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-destructive">
                <LogOut className="h-4 w-4" />
                Çıkış Yap
              </Button>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">İstatistikler</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">127</p>
                    <p className="text-xs text-muted-foreground">İzlenen Film</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">43</p>
                    <p className="text-xs text-muted-foreground">İzleme Listesi</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">56</p>
                    <p className="text-xs text-muted-foreground">Yorum</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">18</p>
                    <p className="text-xs text-muted-foreground">Takipçi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-8">
            <Tabs defaultValue="izlenenler">
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="izlenenler">İzlenenler</TabsTrigger>
                <TabsTrigger value="favoriler">Favoriler</TabsTrigger>
                <TabsTrigger value="liste">İzleme Listesi</TabsTrigger>
                <TabsTrigger value="yorumlar">Yorumlar</TabsTrigger>
              </TabsList>

              <TabsContent value="izlenenler" className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">İzlenen Filmler</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full">
                      Son İzlenenler
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      En Yüksek Puanlı
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      A-Z
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {[
                    {
                      id: "1",
                      title: "Oppenheimer",
                      year: "2023",
                      rating: "8.5",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "2",
                      title: "Barbie",
                      year: "2023",
                      rating: "7.3",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "3",
                      title: "Interstellar",
                      year: "2014",
                      rating: "8.7",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "4",
                      title: "Başlangıç",
                      year: "2010",
                      rating: "8.8",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "5",
                      title: "Parazit",
                      year: "2019",
                      rating: "8.6",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "6",
                      title: "Joker",
                      year: "2019",
                      rating: "8.4",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "7",
                      title: "Dune",
                      year: "2021",
                      rating: "8.0",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "8",
                      title: "Tenet",
                      year: "2020",
                      rating: "7.4",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "9",
                      title: "Avatar 2",
                      year: "2022",
                      rating: "7.6",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "10",
                      title: "Top Gun: Maverick",
                      year: "2022",
                      rating: "8.3",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                  ].map((film) => (
                    <FilmCard
                      key={film.id}
                      id={film.id}
                      title={film.title}
                      year={film.year}
                      rating={film.rating}
                      image={film.image}
                    />
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline">Daha Fazla Göster</Button>
                </div>
              </TabsContent>

              <TabsContent value="favoriler" className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Favori Filmler</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full">
                      Son Eklenenler
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      En Yüksek Puanlı
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {[
                    {
                      id: "1",
                      title: "Esaretin Bedeli",
                      year: "1994",
                      rating: "9.3",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "2",
                      title: "Baba",
                      year: "1972",
                      rating: "9.2",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "3",
                      title: "Kara Şövalye",
                      year: "2008",
                      rating: "9.0",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "4",
                      title: "Baba 2",
                      year: "1974",
                      rating: "9.0",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "5",
                      title: "12 Öfkeli Adam",
                      year: "1957",
                      rating: "9.0",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "6",
                      title: "Schindler'in Listesi",
                      year: "1993",
                      rating: "9.0",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                  ].map((film) => (
                    <FilmCard
                      key={film.id}
                      id={film.id}
                      title={film.title}
                      year={film.year}
                      rating={film.rating}
                      image={film.image}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="liste" className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">İzleme Listesi</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full">
                      Son Eklenenler
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      Yakında Vizyona Girecekler
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {[
                    {
                      id: "1",
                      title: "Gladyatör 2",
                      year: "2024",
                      rating: "N/A",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "2",
                      title: "Joker: Folie à Deux",
                      year: "2024",
                      rating: "N/A",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "3",
                      title: "Dune: Bölüm 2",
                      year: "2024",
                      rating: "8.5",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "4",
                      title: "Deadpool & Wolverine",
                      year: "2024",
                      rating: "N/A",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "5",
                      title: "Furiosa",
                      year: "2024",
                      rating: "N/A",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "6",
                      title: "Godzilla x Kong",
                      year: "2024",
                      rating: "7.0",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                    {
                      id: "7",
                      title: "Venom 3",
                      year: "2024",
                      rating: "N/A",
                      image: "/placeholder.svg?height=450&width=300",
                    },
                  ].map((film) => (
                    <FilmCard
                      key={film.id}
                      id={film.id}
                      title={film.title}
                      year={film.year}
                      rating={film.rating}
                      image={film.image}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="yorumlar" className="pt-6">
                <h2 className="text-xl font-bold mb-6">Film Yorumlarım</h2>

                <div className="space-y-6">
                  {[
                    {
                      film: "Dune: Çöl Gezegeni",
                      date: "15 Mart 2024",
                      rating: 5,
                      comment:
                        "Denis Villeneuve'ün yönetmenliğindeki bu film, Frank Herbert'ın klasik romanını muhteşem bir şekilde beyaz perdeye aktarıyor. Görsel efektler, müzik ve oyunculuklar olağanüstü. Özellikle Timothée Chalamet, Paul Atreides rolünde harika bir performans sergiliyor.",
                    },
                    {
                      film: "Oppenheimer",
                      date: "10 Şubat 2024",
                      rating: 5,
                      comment:
                        "Christopher Nolan'ın bu biyografik filmi, atom bombasının yaratıcısı J. Robert Oppenheimer'ın hayatını ve iç çatışmalarını etkileyici bir şekilde anlatıyor. Cillian Murphy'nin performansı Oscar'lık, sinematografi ve müzik ise her zamanki gibi üst düzeyde.",
                    },
                    {
                      film: "Barbie",
                      date: "5 Ocak 2024",
                      rating: 4,
                      comment:
                        "Greta Gerwig'in yönettiği Barbie filmi, beklenenden çok daha derin ve düşündürücü. Margot Robbie ve Ryan Gosling harika bir ikili oluşturuyor. Film, toplumsal cinsiyet rolleri ve kimlik arayışı gibi konuları eğlenceli bir şekilde ele alıyor.",
                    },
                    {
                      film: "Interstellar",
                      date: "20 Aralık 2023",
                      rating: 5,
                      comment:
                        "Nolan'ın en duygusal filmlerinden biri. Bilimsel gerçekliği ve insani duyguları mükemmel bir şekilde harmanlıyor. Matthew McConaughey'nin performansı, Hans Zimmer'ın müzikleri ve görsel efektler filmi unutulmaz kılıyor.",
                    },
                  ].map((review, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle>{review.film}</CardTitle>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">{review.rating}.0</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 fill-yellow-500 text-yellow-500"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </div>
                        </div>
                        <CardDescription>{review.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
