package ru.nautilus.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class VkWidgetInfo {
    String avatar;
    String title;
    String subheader;
    String groupUrl;
    String subscribeUrl;
    List<SubscribersInfo> subscribers;
}
