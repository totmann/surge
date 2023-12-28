if ($response.body) {
    let obj = JSON.parse($response.body);
    if (obj.data)
        obj.data.Subscription.bnrtxt = "";
        obj.data.Subscription.btntxt = "";
        obj.data.Subscription.message = "";
        obj.data.Subscription.hasPremiumAccess = true;
        obj.data.Subscription.subscriptionType = "premium";
        obj.data.Subscription.subscription = "premium";
        obj.data.Subscription.renewdate = "2047-08-07T00:00:00+09:00";
        obj.data.Subscription.status = "active";
        obj.data.Subscription.pplus_begin_date = "2022-08-07T00:00:00+09:00";
        if (obj.data.Path && obj.data.Path.Entities) {
            for (i in obj.data.Path.Entities) {
                obj.data.Path.Entities[i].Locked = false;
            }
        }
        else if (obj.data.Playlist) {
            for (i in obj.data.Playlist) {
                if (obj.data.Playlist.AudioFiles) {
                    for (i in obj.data.Playlist.AudioFiles) {
                        obj.data.Playlist.AudioFiles[i].Locked = false;
                    }
                }
                else if (obj.data.Playlist.MediaFiles) {
                    for (i in obj.data.Playlist.MediaFiles) {
                        obj.data.Playlist.MediaFiles[i].Locked = false;
                    }
                }
            }
        }
        else if (obj.data.Lesson) {
            if (obj.data.Lesson.LessonPdfs) {
                for (i in obj.data.Lesson.LessonPdfs) {
                    obj.data.Lesson.LessonPdfs[i].Locked = false;
                }
            }
            else if (obj.data.Lesson.VideoFiles) {
                for (i in obj.data.Lesson.VideoFiles) {
                    obj.data.Lesson.VideoFiles[i].Locked = false;
                }
            }
            else if (obj.data.Lesson.MediaFiles) {
                for (i in obj.data.Lesson.MediaFiles) {
                    obj.data.Lesson.MediaFiles[i].Locked = false;
                }
            }
        }
      
    $done({body: JSON.stringify(obj)});
}

$done({});