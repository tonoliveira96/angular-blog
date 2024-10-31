import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakePosts } from '../../../data/fake-data';

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
  private id: string | null = null;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => {
      this.id = value.get("id");
    });
    console.log(this.id)
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const post = fakePosts
      .find(post => post.id === id);

    if (post) {
      this.date = post.date,
      this.title = post.title,
      this.description = post.description,
      this.image_url = post.image_url
    }
  }
}
