import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Projekcija } from '../model/projekcija';
import { Film } from '../model/film';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CartOverviewComponent } from '../cart-overview/cart-overview.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  cart: Projekcija[] = [];
  readonly dialog = inject(MatDialog);

  filmovi: Film[] = [
    {
      id: 1,
      name: "Avengers: ENDGAME",
      description: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      duration: 181,
      genre: "Action/Sci-fi",
      actors: ["Rober Downey JR", "Chris Evans", "Mark Ruffalo"],
      createdAt: "April 26, 2019",
      producer: "Anthony Russo",
    },
    {
      id: 2,
      name: "The Godfather",
      description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      duration: 175,
      genre: "Crime",
      actors: ["Marlon Brando", "Al Pacino"],
      createdAt: "March 24, 1972",
      producer: "Albert S. Ruddy",
    },
    {
      id: 3,
      name: "The Dark Knight",
      description: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.",
      duration: 152,
      genre: "Action/Crime",
      actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
      createdAt: "July 24, 2008",
      producer: "Christopher Nolan",
    },
    {
      id: 4,
      name: "Forrest Gump",
      description: "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
      duration: 144,
      genre: "Comedy/Romance",
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      createdAt: "July 6, 1994",
      producer: "Robert Zemeckis",
    },
    {
      id: 5,
      name: "Fight Club",
      description: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
      duration: 139,
      genre: "Action/Thriller",
      actors: ["Edward Norton", "Brad Pitt", "Jared Leto"],
      createdAt: "October 15, 1999",
      producer: "David Fincher",
    },
    {
      id: 6,
      name: "Inception",
      description: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
      duration: 148,
      genre: "Sci-fi/Action",
      actors: ["Leonardo DiCaprio", "Cillian Murphy", "Tom Hardy"],
      createdAt: "July 22, 2010",
      producer: "Christopher Nolan",
    },
    {
      id: 7,
      name: "Interstellar",
      description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      duration: 169,
      genre: "Sci-fi/Adventure",
      actors: ["Matthew McConaughey","Timothée Chalamet", "Mackenzie Foy"],
      createdAt: "November 6, 2014",
      producer: "Christopher Nolan",
    },
    {
      id: 8,
      name: "The Silence of the Lambs",
      description: "Clarice Starling, an FBI trainee, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another murderer who has been claiming female victims.",
      duration: 118,
      genre: "Horror/Crime",
      actors: ["Anthony Hopkins", "Jodie Foster", "Ted Levine"],
      createdAt: "June 7, 1991",
      producer: "Jonathan Demme",
    },
    {
      id: 9,
      name: "City of God",
      description: "Two boys are brought up in a sadistic neighbourhood of Rio de Janeiro. Later, they adopt diverse professional paths, with one of them becoming a photographer and the other boy becoming a drug dealer.",
      duration: 130,
      genre: "Crime/Drama",
      actors: ["Alexandre Rodrigues", "Alice Braga", "Douglas Silva"],
      createdAt: "August 30, 2002",
      producer: "Fernando Meirelles",
    },
    {
      id: 10,
      name: "The Green Mile",
      description: "Paul Edgecomb, the head guard of a prison, meets an inmate, John Coffey, a black man who is accused of murdering two girls. His life changes drastically when he discovers that John has a special gift.",
      duration: 189,
      genre: "Crime/Fantasy",
      actors: ["Michael Clark Duncan", "Tom Hanks", "David Morse"],
      createdAt: "December 6, 1999",
      producer: "Frank Darabont",
    }
  ];
  projekcije: Projekcija[] = [
    {
      id: 1,
      price: 50,
      startingAt: "25.10.2024 19:00",
      film: this.filmovi[0],
    },
    {
      id: 2,
      price: 70,
      startingAt: "25.10.2024 19:00",
      film: this.filmovi[1],
    },
    {
      id: 3,
      price: 40,
      startingAt: "25.10.2024 22:00",
      film: this.filmovi[2],
    },
    {
      id: 4,
      price: 50,
      startingAt: "25.10.2024 22:00",
      film: this.filmovi[3],
    },
    {
      id: 5,
      price: 60,
      startingAt: "26.10.2024 19:00",
      film: this.filmovi[4],
    },
    {
      id: 6,
      price: 80,
      startingAt: "26.10.2024 19:00",
      film: this.filmovi[5],
    },
    {
      id: 7,
      price: 90,
      startingAt: "26.10.2024 22:00",
      film: this.filmovi[6],
    },
    {
      id: 8,
      price: 70,
      startingAt: "26.10.2024 22:00",
      film: this.filmovi[7],
    },
    {
      id: 9,
      price: 100,
      startingAt: "27.10.2024 19:00",
      film: this.filmovi[8],
    },
    {
      id: 10,
      price: 90,
      startingAt: "27.10.2024 22:00",
      film: this.filmovi[9],
    }
  ];
  openCart(){
    const dialogRef = this.dialog.open(CartOverviewComponent,{
      data: this.cart
    });
  }
  book(projekcija:Projekcija){
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cart.push(projekcija)
      }
    });
  };
}
