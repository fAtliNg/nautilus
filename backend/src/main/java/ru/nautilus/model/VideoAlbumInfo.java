package ru.nautilus.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@Getter
@Setter
@Document(collection="videos")
public class VideoAlbumInfo {
    int albumid;
    String original;
    String thumbnail;
    String embedUrl;
    String description;
}
