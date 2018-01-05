package ru.nautilus.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@Getter
@Setter
@Document(collection="videopreview")
public class VideoGalleryPreviewInfo {
    int id;
    String previewImage;
    String name;
    String description;
}
