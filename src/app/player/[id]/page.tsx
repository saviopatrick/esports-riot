'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Moon, Sun, Twitter, Twitch, Youtube } from 'lucide-react'
import Link from 'next/link'

const playerData = {
  name: "Faker",
  summonerName: "Hide on bush",
  rank: "Challenger",
  description: "Legendary mid laner for T1, considered one of the best League of Legends players of all time.",
  winRate: 62,
  kdaRatio: 4.2,
  mostPlayedChampion: "Zed",
  recentMatches: [
    { id: 1, champion: "Zed", result: "Victory", kda: "8/2/6", date: "2023-06-15" },
    { id: 2, champion: "Azir", result: "Defeat", kda: "3/4/2", date: "2023-06-14" },
    { id: 3, champion: "Ryze", result: "Victory", kda: "6/1/9", date: "2023-06-13" },
  ],
  topChampions: [
    { name: "Zed", playRate: 25, winRate: 68 },
    { name: "Azir", playRate: 20, winRate: 65 },
    { name: "Ryze", playRate: 18, winRate: 60 },
  ]
}

export default function PlayerComponent() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="p-4 flex justify-between items-center bg-primary text-primary-foreground">
        <h1 className="text-2xl font-bold">Player Profile</h1>
        <Button onClick={toggleDarkMode} variant="outline" size="icon">
          {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </header>
      <main className="container mx-auto p-4">
        <Card className="mb-6">
          <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-4 pt-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt={playerData.name} />
              <AvatarFallback>{playerData.name[0]}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">{playerData.name}</h2>
              <p className="text-muted-foreground">Summoner Name: {playerData.summonerName}</p>
              <p className="text-muted-foreground">Rank: {playerData.rank}</p>
              <p className="mt-2">{playerData.description}</p>
              <div className="mt-4 flex justify-center md:justify-start gap-2">
                <Button size="icon" variant="outline">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter profile</span>
                </Button>
                <Button size="icon" variant="outline">
                  <Twitch className="h-4 w-4" />
                  <span className="sr-only">Twitch channel</span>
                </Button>
                <Button size="icon" variant="outline">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube channel</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Matches</CardTitle>
            </CardHeader>
            <CardContent>
              {playerData.recentMatches.map((match) => (
                <div key={match.id} className="mb-4 p-2 border rounded flex justify-between items-center">
                  <div>
                    <p className="font-bold">{match.champion}</p>
                    <p className="text-sm text-muted-foreground">{match.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={match.result === "Victory" ? "text-green-500" : "text-red-500"}>{match.result}</p>
                    <p className="text-sm">{match.kda}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-2">View More Matches</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Player Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Win Rate:</span>
                  <span className="font-bold">{playerData.winRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span>KDA Ratio:</span>
                  <span className="font-bold">{playerData.kdaRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span>Most Played Champion:</span>
                  <span className="font-bold">{playerData.mostPlayedChampion}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Most Played Champions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {playerData.topChampions.map((champion) => (
                <div key={champion.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${champion.name}`} alt={champion.name} />
                      <AvatarFallback>{champion.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{champion.name}</span>
                  </div>
                  <div className="text-right">
                    <p>Play Rate: {champion.playRate}%</p>
                    <p>Win Rate: {champion.winRate}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className={`mt-8 p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="#" className="mr-4">API Docs</Link>
            <Link href="#" className="mr-4">Terms of Use</Link>
            <Link href="#" className="mr-4">Contact</Link>
          </div>
          <div>
            <span>Follow us on social media</span>
          </div>
        </div>
      </footer>
    </div>
  )
}