package simpledev.movie.builder;

import simpledev.movie.dto.MovieDTO;

public class MovieDtoBuilder {

    public static MovieDTO createMovieToSaved(){
        return MovieDTO.builder()
                .title("Batman")
                .count(1)
                .score(5.0)
                .sinopse("Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.")
                .image("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg")
                .build();
    }

    public static MovieDTO createValidMovie(){
        return MovieDTO.builder()
                .id(1l)
                .title("Batman")
                .count(1)
                .score(5.0)
                .sinopse("Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.")
                .image("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg")
                .build();
    }

    public static MovieDTO updateValidMovie(){
        return MovieDTO.builder()
                .id(1l)
                .title("Encanto")
                .count(1)
                .score(4.0)
                .sinopse("Uma garota chamada Mirabel Madrigal cresce como o único membro não mágico de sua família, que vivem escondidos em uma vibrante casa encantada nas montanhas da Colômbia.")
                .image("https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg")
                .build();
    }
}
