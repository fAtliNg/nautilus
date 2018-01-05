package ru.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.nautilus.model.VideoGalleryPreviewInfo;
import ru.nautilus.service.DataService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/gallery")
public class VideoGalleryPreviewDataController {

    @Autowired
    protected DataService Service;

    @RequestMapping(value = "/video", method = GET)
    public List<VideoGalleryPreviewInfo> getVideoGalleryPreview() { return Service.getVideoGalleryPreviewInfo(); }
}
