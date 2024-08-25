'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Moon, Sun } from 'lucide-react'
import Link from 'next/link'

const initialMatches = [
  { id: 1, date: '2023-06-15', teamA: 'SKT T1', teamB: 'G2 Esports', result: 'SKT T1', duration: '32:45' },
  { id: 2, date: '2023-06-14', teamA: 'Cloud9', teamB: 'Fnatic', result: 'Fnatic', duration: '28:30' },
  { id: 3, date: '2023-06-13', teamA: 'DWG KIA', teamB: 'Team Liquid', result: 'DWG KIA', duration: '35:12' },
]

export default function MainComponent() {
  const [matches, setMatches] = useState(initialMatches)
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const handleSearch = () => {
    const filteredMatches = initialMatches.filter(match => 
      match.teamA.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.teamB.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setMatches(filteredMatches)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="p-4 flex justify-between items-center bg-primary text-primary-foreground">
        <h1 className="text-2xl font-bold">Esports Match Analysis</h1>
        <Button onClick={toggleDarkMode} variant="outline" size="icon">
          {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex w-full md:w-1/2 mb-4 md:mb-0">
            <Input
              type="text"
              placeholder="Search for team or player"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2"
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {matches.map((match) => (
            <Link href={`/match/${match.id}`} key={match.id}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{match.teamA} vs {match.teamB}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Date: {match.date}</p>
                  <p>Result: {match.result} won</p>
                  <p>Duration: {match.duration}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <footer className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="mr-4">API Docs</a>
            <a href="#" className="mr-4">Terms of Use</a>
            <a href="#" className="mr-4">Contact</a>
          </div>
          <div>
            <span>Follow us on social media</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
