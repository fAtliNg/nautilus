package ru.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.nautilus.model.VideoAlbumInfo;
import ru.nautilus.model.VideoGalleryPreviewInfo;
import ru.nautilus.service.DataService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/gallery")
public class VideoGalleryDataController {

    @Autowired
    protected DataService Service;

    @RequestMapping(value = "/video", method = GET)
    public List<VideoGalleryPreviewInfo> getVideoGalleryPreview() { return Service.getVideoGalleryPreviewInfo(); }

    @RequestMapping(value = "/video/{id}", method = GET)
    @ResponseBody
    public List<VideoAlbumInfo> getVideoAlbum(@PathVariable("id") int id) { return Service.getVideoAlbumInfo(id); }
}
