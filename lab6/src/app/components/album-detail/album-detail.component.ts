import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  saving = false;
  error = '';
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.loadAlbum();
    });
  }

  loadAlbum(): void {
    this.loading = true;
    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        this.album = { ...data };
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load album';
        this.loading = false;
        console.error(err);
      }
    });
  }

  saveAlbum(): void {
    if (this.album) {
      this.saving = true;
      this.albumService.updateAlbum(this.album).subscribe({
        next: () => {
          this.saving = false;
          alert('Album updated successfully');
        },
        error: (err) => {
          this.saving = false;
          console.error('Error updating album:', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }
}
