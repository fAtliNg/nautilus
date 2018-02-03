package ru.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.nautilus.model.PhotoInfo;
import ru.nautilus.model.PhotoAlbumInfo;
import ru.nautilus.service.DataService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/gallery")
public class PhotoGalleryDataController {

    @Autowired
    protected DataService Service;

    @RequestMapping(value = "/photo", method = GET)
    @ResponseBody
    public List<PhotoAlbumInfo> getPhotoGalleryPreview() {
        return Service.getPhotoAlbumInfo();
    }

    @RequestMapping(value = "/photo/{id}", method = GET)
    @ResponseBody
    public List<PhotoInfo> getPhotoAlbum(@PathVariable("id") int id) {
        return Service.getPhotoByAlbum(id);
    }
}
