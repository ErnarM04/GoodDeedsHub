import {Component, OnInit} from '@angular/core';
import {Post} from '../models';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  ngOnInit() {
    this.showAll()
  }

  public signedIn: boolean = false;
  protected posts: Post[] = [{title: 'Community Garden Project', text: 'Help us create a beautiful community garden in the heart of the city.', organization: 'Green Thumb Organization', date: new Date()},
    {title: 'Community Garden Project', text: 'Help us create a beautiful community garden in the heart of the city.', organization: 'Green Thumb Organization', date: new Date()},
    {title: 'Community Garden Project', text: 'Help us create a beautiful community garden in the heart of the city.', organization: 'Green Thumb Organization', date: new Date()}];
  protected applied: Post[] = [];
  protected show: Post[] = [];

  protected reco: boolean = true;
  protected appl: boolean = false
  protected avai: boolean = false

  protected apply(){
    this.applied.push(<Post>this.posts.pop());
  }
  protected delete(){
    this.posts.push(<Post>this.applied.pop());
  }

  protected showApplied(){
    this.show = this.applied;
  }
  protected showAll(){
    this.show = this.posts;
  }
}
