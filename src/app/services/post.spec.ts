import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { PostService } from './post';

describe('PostService', () => {

  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({

      imports: [
        HttpClientTestingModule
      ]

    });

    service = TestBed.inject(PostService);

    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

  it('should fetch posts using GET request', () => {

    const dummyPosts: any[] = [

      {
        id: 1,
        title: 'Angular Testing'
      },

      {
        id: 2,
        title: 'College Management'
      }

    ];

    service.getPosts().subscribe((posts: any[]) => {

      expect(posts.length).toBe(2);

      expect(posts).toEqual(dummyPosts);

    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );

    expect(req.request.method).toBe('GET');

    req.flush(dummyPosts);

  });

  afterEach(() => {

    httpMock.verify();

  });

});