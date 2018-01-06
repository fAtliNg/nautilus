package ru.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.nautilus.model.SubscribersInfo;
import ru.nautilus.model.VkWidgetInfo;
import ru.nautilus.service.DataService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/vk")
public class VkWidgetDataController {
    @Autowired
    protected DataService Service;

    @RequestMapping(method = GET)
    public VkWidgetInfo getVkWidgetData() {
        List<SubscribersInfo> subscribers = Service.getSubscribersInfo();
        VkWidgetInfo result = new VkWidgetInfo(
                "https://pp.userapi.com/c837425/v837425654/4959c/4nWFZ1fwAGw.jpg",
                "МФК \"Наутилус\"",
                "61 подписчик",
                "https://vk.com/mfc_nautilus",
                "https://vk.com/widget_community.php?act=a_subscribe_box&oid=-152573647&state=1&widget=4",
                subscribers
        );
        return result;
    }
}
