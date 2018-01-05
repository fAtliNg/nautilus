package ru.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.nautilus.model.PhotoGalleryPreviewInfo;
import ru.nautilus.service.DataService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/gallery")
public class PhotoGalleryPreviewDataController {

    @Autowired
    protected DataService Service;

    @RequestMapping(value = "/photo", method = GET)
    @ResponseBody
    public List<PhotoGalleryPreviewInfo> getPhotoGalleryPreview() { return Service.getPhotoGalleryPreviewInfo(); }
}
