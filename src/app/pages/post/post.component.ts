import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image_url!: string;
  @Input() date!: string;
  private id:string | null = "0";

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => {
      this.id = value.get("id")
    });
  }
}
