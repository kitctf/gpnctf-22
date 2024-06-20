const I="data:application/json;base64,W3siaWQiOiAicmV2IiwgImxvbmdOYW1lIjogIlJldmVyc2luZyIsICJkZXNjcmlwdGlvbiI6ICJEaWQgeW91IGV2ZXIgd2FudCB0byBrbm93IGhvdyBjdXJzZWQgc29mdHdhcmUgd29ya3M/IFRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciB5b3UgdGhlbiEiLCAiY292ZXJVcmwiOiAiL2FyY2hpdmUvdGFnLWNvdmVycy9yZXYucG5nIiwgImlzQ2F0ZWdvcnkiOiB0cnVlfSwgeyJpZCI6ICJ3ZWIiLCAibG9uZ05hbWUiOiAiV2ViIiwgImRlc2NyaXB0aW9uIjogIlRoZSBpbnRlcm5ldCBpcyBiaWcgYW5kIHNjYXJ5LiBTbyBhcmUgdGhlc2Ugd2ViIGNoYWxsZW5nZXMuIiwgImNvdmVyVXJsIjogIi9hcmNoaXZlL3RhZy1jb3ZlcnMvd2ViLnBuZyIsICJpc0NhdGVnb3J5IjogdHJ1ZX0sIHsiaWQiOiAicHduIiwgImxvbmdOYW1lIjogIlB3bmluZyIsICJkZXNjcmlwdGlvbiI6ICJTaG93IG91ciBhcnRpc3RzIHdobydzIGdvdCBjb250cm9sIG9mIHRoZWlyIGJpbmFyaWVzISIsICJjb3ZlclVybCI6ICIvYXJjaGl2ZS90YWctY292ZXJzL3B3bi5wbmciLCAiaXNDYXRlZ29yeSI6IHRydWV9LCB7ImlkIjogIm1pc2MiLCAibG9uZ05hbWUiOiAiTWlzY2VsbGFuZW91cyIsICJkZXNjcmlwdGlvbiI6ICJBbGwgdGhlIGNoYWxsZW5nZXMgd2UgZGlkbid0IGZpbmQgYW5vdGhlciBnZW5yZSBmb3IuIiwgImNvdmVyVXJsIjogIi9hcmNoaXZlL3RhZy1jb3ZlcnMvbWlzYy5wbmciLCAiaXNDYXRlZ29yeSI6IHRydWV9LCB7ImlkIjogImNyeXB0byIsICJsb25nTmFtZSI6ICJDcnlwdG8iLCAiZGVzY3JpcHRpb24iOiAiVnMgbGJoIHBuYSBlcm5xIGd1dmYgbGJoJ2VyIGVybnFsIHNiZSBndXZmIHBuZ3J0YmVsISIsICJjb3ZlclVybCI6ICIvYXJjaGl2ZS90YWctY292ZXJzL2NyeXB0by5wbmciLCAiaXNDYXRlZ29yeSI6IHRydWV9LCB7ImlkIjogImFsbCIsICJsb25nTmFtZSI6ICJUaGlzIHllYXIncyBncmVhdGVzdCBoaXRzIiwgImRlc2NyaXB0aW9uIjogIkEgY2FyZWZ1bCBzZWxlY3Rpb24gb2YgdGhlIGJlc3QgY2hhbGxlbmdlcyB0aGlzIHllYXIuIiwgImNvdmVyVXJsIjogIi9hcmNoaXZlL3RhZy1jb3ZlcnMvYWxsLnBuZyIsICJpc0NhdGVnb3J5IjogZmFsc2V9LCB7ImlkIjogImludHJvIiwgImxvbmdOYW1lIjogIkludHJvZHVjdGlvbiIsICJkZXNjcmlwdGlvbiI6ICJBIHNldCBvZiBjaGFsbGVuZ2VzIGhhbmRjcmFmdGVkIGZvciBDVEYgQmVnaW5uZXJzLiBXaXRoIHRoZXNlIChhbmQgb25seSB0aGVzZSkgY2hhbGxlbmdlcywgZGlzY3Vzc2lvbiBhbmQgaGVscCBpcyBlbmNvdXJhZ2VkIHdoZW4geW91J3JlIHN0dWNrLiBIYXZlIGZ1biEiLCAiY292ZXJVcmwiOiAiL2FyY2hpdmUvdGFnLWNvdmVycy9pbnRyby5wbmciLCAiaXNDYXRlZ29yeSI6IGZhbHNlfSwgeyJpZCI6ICJlYXN5IiwgImxvbmdOYW1lIjogIkVhc3kiLCAiZGVzY3JpcHRpb24iOiAiVGhlc2UgY2hhbGxlbmdlcyBjaGFsbGVuZ2VzIGFyZW4ndCB0cml2aWFsIGJ1dCBzb2x2YWJsZSB3aXRoIGxpdHRsZSBleHBlcmllbmNlIChpLmUuIEludHJvZHVjdGlvbikgYW5kIGRlZGljYXRpb24uIiwgImNvdmVyVXJsIjogIi9hcmNoaXZlL3RhZy1jb3ZlcnMvZWFzeS5wbmciLCAiaXNDYXRlZ29yeSI6IGZhbHNlfSwgeyJpZCI6ICJiYWJ5IiwgImxvbmdOYW1lIjogIkhhcmQiLCAiZGVzY3JpcHRpb24iOiAiQ2hhbGxlbmdlcyBzbyBlYXN5IGEgYmFieSBjb3VsZCBzb2x2ZSB0aGVtLiBUcnVzdCBtZSwgdGhleSdyZSByZWFsbHkgcmVhbGx5IGVhc3kuIEJ1dCBkb24ndCBibGFtZSBtZSBpZiB0aGV5IGFyZW4ndC4iLCAiY292ZXJVcmwiOiAiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8xLzE1L0NhdF9BdWd1c3RfMjAxMC00LmpwZy8xOTIwcHgtQ2F0X0F1Z3VzdF8yMDEwLTQuanBnIiwgImlzQ2F0ZWdvcnkiOiBmYWxzZX0sIHsiaWQiOiAidW5zb2x2ZWQiLCAibG9uZ05hbWUiOiAiVW5zb2x2ZWQiLCAiZGVzY3JpcHRpb24iOiAiQ2hhbGxlbmdlcyB3aGljaCBkaWQgbm90IG1ha2UgaXQgaW50byB0aGUgY2hhcnRzIHlldC4gWW91IHNob3VsZCBmaXggdGhhdC4uLiIsICJjb3ZlclVybCI6ICIvYXJjaGl2ZS90YWctY292ZXJzL3Vuc29sdmVkLndlYnAiLCAiaXNDYXRlZ29yeSI6IGZhbHNlfV0=";export{I as default};
